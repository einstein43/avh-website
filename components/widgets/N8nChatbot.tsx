'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface N8nChatbotProps {
  webhookUrl: string;
  botName?: string;
  primaryColor?: string;
  position?: 'bottom-right' | 'bottom-left';
  initialMessage?: string;
}

export default function N8nChatbot({ 
  webhookUrl,
  botName = 'A-VH Assistant',
  primaryColor = 'purple',
  position = 'bottom-right',
  initialMessage = 'Hallo! Ik ben je A-VH assistent. Ik ken alle informatie over onze website en diensten. Hoe kan ik je helpen? 👋'
}: N8nChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: initialMessage,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize session
  useEffect(() => {
    let sid = localStorage.getItem('n8n_chat_session_id');
    if (!sid) {
      sid = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('n8n_chat_session_id', sid);
    }
    setSessionId(sid);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // N8n Chat Trigger expects POST request with chatInput and sessionId
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: messageText,
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // N8n Chat Trigger returns response in 'output' field
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.output || data.message || data.response || 'Sorry, ik kon dat niet verwerken.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, er is een fout opgetreden. Probeer het later opnieuw.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const positionClasses = position === 'bottom-right' 
    ? 'right-4 sm:right-6' 
    : 'left-4 sm:left-6';

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 
          bg-gradient-to-r from-${primaryColor}-600 to-blue-600 
          text-white rounded-full p-4 shadow-2xl 
          hover:scale-110 transition-transform duration-300
          hover:shadow-${primaryColor}-500/50`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-20 sm:bottom-24 ${positionClasses} z-50 
          w-[90vw] sm:w-96 h-[500px] sm:h-[600px] 
          bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl 
          border border-${primaryColor}-500/20 flex flex-col
          animate-slide-up`}>
          
          {/* Header */}
          <div className={`bg-gradient-to-r from-${primaryColor}-600 to-blue-600 
            p-4 rounded-t-2xl flex items-center justify-between`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{botName}</h3>
                <p className="text-white/80 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? `bg-gradient-to-r from-${primaryColor}-600 to-blue-600 text-white`
                      : 'bg-slate-800/50 text-gray-200 border border-white/10'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <span className={`text-xs mt-1 block ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('nl-NL', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 rounded-2xl px-4 py-3 border border-white/10">
                  <Loader2 className="h-5 w-5 text-purple-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Typ je bericht..."
                className="flex-1 bg-slate-800/50 text-white rounded-xl px-4 py-3 
                  border border-white/10 focus:border-purple-500/50 
                  focus:outline-none focus:ring-2 focus:ring-purple-500/20
                  placeholder-gray-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`bg-gradient-to-r from-${primaryColor}-600 to-blue-600 
                  text-white rounded-xl p-3 
                  hover:from-${primaryColor}-700 hover:to-blue-700 
                  transition disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

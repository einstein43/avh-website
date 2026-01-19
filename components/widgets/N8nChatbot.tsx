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

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-primary-gradient text-white rounded-full p-4 shadow-2xl hover:scale-110 transition duration-300"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 flex flex-col rounded-2xl shadow-2xl border border-primary-blue/20 animate-slide-up" style={{ width: '24rem', height: '600px', backgroundColor: 'rgba(15, 23, 42, 0.95)' }}>
          
          <div className="bg-primary-gradient p-4 rounded-t-2xl flex items-center justify-between">
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

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    borderRadius: '1rem',
                    padding: '1rem',
                    backgroundColor: message.sender === 'user' ? 'var(--primary-blue)' : 'rgba(30, 41, 59, 0.5)',
                    color: message.sender === 'user' ? 'white' : '#d1d5db',
                    border: message.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', display: 'block', color: message.sender === 'user' ? 'rgba(255, 255, 255, 0.7)' : '#6b7280' }}>
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
                <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '1rem', padding: '1rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Loader2 className="h-5 w-5 text-primary-blue animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Typ je bericht..."
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  color: 'white',
                  borderRadius: '0.75rem',
                  padding: '0.75rem 1rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-primary-gradient text-white rounded-xl p-3 hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
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

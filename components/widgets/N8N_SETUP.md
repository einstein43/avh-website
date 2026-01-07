# N8n RAG Chatbot Integration Guide

## Overview
This chatbot is integrated with your n8n RAG (Retrieval Augmented Generation) workflow that has knowledge about your website content. The workflow automatically scrapes and indexes your website daily, allowing the AI assistant to answer questions based on actual website content.

## Your Workflow Features

✅ **Automated Website Scraping** - Runs daily at 2 AM to update knowledge base
✅ **RAG (Retrieval Augmented Generation)** - AI searches your website content to answer questions
✅ **Conversation Memory** - Remembers context within each chat session
✅ **OpenAI GPT-4** - Powered by advanced AI model
✅ **Vector Store** - Efficient semantic search of website content

## Quick Start

### Your Current Setup

Your webhook URL is already configured in [app/page.tsx](../app/page.tsx):
```tsx
<N8nChatbot 
  webhookUrl="https://mwdev-01.app.n8n.cloud/webhook/078c3bf7-d291-44ee-86c4-5f642802e130/chat"
  botName="A-VH Assistant"
  primaryColor="purple"
  position="bottom-right"
/>
```

## N8n Workflow Architecture

Your workflow consists of two main parts:

### 1. Knowledge Base Update (Scheduled)
Runs daily at 2:00 AM:
```
Schedule Trigger (2 AM)
  ↓
Fetch Website Content (HTTP Request)
  ↓
Document Loader (Process HTML)
  ↓
Text Splitter (Chunk content)
  ↓
OpenAI Embeddings (Create vectors)
  ↓
Vector Store (Store in memory: website_content)
```

### 2. Chat Interface (User Interaction)
Triggered when users send messages:
```
Chat Trigger (Webhook)
  ↓
RAG Agent
  ├─ OpenAI Chat Model (GPT-4)
  ├─ Vector Store Tool (Search website_content)
  └─ Window Buffer Memory (Conversation history)
  ↓
Response to User
```

## Request/Response Format

### What the Chatbot Sends:
```json
{
  "chatInput": "What services does A-VH offer?",
  "sessionId": "session_1704456789_abc123def"
}
```

### What Your Workflow Returns:
```json
{
  "output": "A-VH offers AI automation services in three main areas: Sports Analytics, Financial Services, and Production Optimization..."
}
```

## Customization Options

### Update Website URL
In your n8n workflow, update the "Fetch Website Content" node:
- Current: `<__PLACEHOLDER_VALUE__Website URL to scrape__>`
- Change to: Your actual website URL (e.g., `https://a-vh.nl`)

### Adjust Scraping Schedule
Modify the "Schedule Trigger" node:
- Current: Daily at 2:00 AM
- Options: Hourly, daily, weekly, or custom cron expression

### Customize AI Behavior
Edit the RAG Agent's system message:
```
You are a helpful AI assistant with access to a knowledge base containing website content.

Your task is to:
1. Use the website_knowledge_base tool to search for relevant information
2. Provide accurate, helpful answers based on the website content
3. If information is not found in the knowledge base, clearly state that
4. Be conversational and friendly while maintaining accuracy

Always cite information from the knowledge base when answering questions.
```

### Adjust Memory Settings
Window Buffer Memory keeps recent conversation history:
- Modify the "Window Buffer Memory" node to change how many messages to remember

### Change AI Model
OpenAI Chat Model settings:
- Current: `gpt-4.1-mini`
- Options: `gpt-4`, `gpt-3.5-turbo`, etc.

### Tune Retrieval Settings
Vector Store Tool parameters:
- `topK`: Number of relevant chunks to retrieve (current: 5)
- Increase for more context, decrease for faster responses

## Widget Customization

### Props Available:
```tsx
interface N8nChatbotProps {
  webhookUrl: string;          // Your n8n webhook URL
  botName?: string;             // Display name (default: "A-VH Assistant")
  primaryColor?: string;        // Theme color (default: "purple")
  position?: 'bottom-right' | 'bottom-left'; // Position (default: "bottom-right")
  initialMessage?: string;      // Welcome message
}
```

### Example Custom Configuration:
```tsx
<N8nChatbot 
  webhookUrl="https://mwdev-01.app.n8n.cloud/webhook/078c3bf7-d291-44ee-86c4-5f642802e130/chat"
  botName="A-VH Website Assistent"
  primaryColor="blue"
  position="bottom-left"
  initialMessage="Welkom! Ik heb alle kennis over onze diensten. Vraag me iets! 🚀"
/>
```

## Testing Your Setup

### 1. Verify Workflow is Active
1. Open your n8n workflow
2. Ensure the workflow is **activated** (toggle in top right)
3. Check that the Schedule Trigger has run at least once to populate the knowledge base

### 2. Test Website Scraping
Manually trigger the Schedule Trigger:
1. Click on "Schedule Trigger" node
2. Click "Execute Node"
3. Verify the Vector Store receives the website content

### 3. Test the Chat Interface
Test directly in n8n:
1. Open the workflow
2. Find the "Chat Trigger" node
3. Use the built-in chat interface to test queries

### 4. Test from Your Website
1. Open your website
2. Click the chat button
3. Ask a question like: "What services does A-VH offer?"
4. The bot should respond with information from your website

### Example Test Questions:
- "What services do you provide?"
- "Tell me about your AI automation solutions"
- "What technologies do you use?"
- "How can I contact A-VH?"

## Troubleshooting

### Bot Not Responding
1. **Check workflow is active** - Toggle must be ON in n8n
2. **Verify webhook URL** - Must match exactly in page.tsx
3. **Check browser console** - Look for error messages
4. **Test workflow directly** - Use n8n's chat interface first

### Bot Says "Information Not Found"
1. **Run the scraper** - Manually trigger Schedule Trigger node
2. **Check website URL** - Update "Fetch Website Content" node with your URL
3. **Verify vector store** - Check that embeddings are being created
4. **Test retrieval** - Use vector store tool in n8n to search

### CORS Errors
n8n Cloud handles CORS automatically. If self-hosting:
1. Check n8n configuration
2. Ensure webhook allows external requests
3. Add proper CORS headers if needed

### Slow Responses
- RAG queries can take 3-5 seconds
- Loading indicator shows while processing
- Consider caching common questions

### Memory Issues
- Window Buffer Memory is session-based
- Each user gets their own conversation history
- Memory resets when session ends

## Monitoring & Optimization

### View Execution Logs
1. Go to n8n "Executions" tab
2. Check recent chat interactions
3. Review any errors or slow queries

### Improve Response Quality
1. **Better Website Content** - More detailed, well-structured content
2. **Chunk Size** - Adjust Text Splitter settings
3. **Top K Results** - Increase from 5 to 8-10 for more context
4. **AI Instructions** - Refine the RAG Agent system message

### Reduce Costs
1. Use `gpt-3.5-turbo` instead of `gpt-4` for lower costs
2. Reduce chunk size to process less text
3. Lower topK to retrieve fewer documents

## Production Checklist

- [x] Workflow activated in n8n
- [x] Website URL configured in scraper
- [x] Webhook URL added to website
- [ ] Initial scrape completed (run Schedule Trigger manually)
- [ ] Test chat interface works
- [ ] Test RAG retrieval with various questions
- [ ] Check conversation memory works
- [ ] Test error handling
- [ ] Verify mobile responsiveness
- [ ] Set up monitoring/alerts
- [ ] Document common issues for support

## Advanced: Adding More Data Sources

Want to add more than just your website? Update the workflow:

### 1. Multiple Websites
Add more HTTP Request nodes → Document Loaders → Same Vector Store

### 2. PDF Documents
Replace HTTP Request with Read Binary File → PDF Loader → Vector Store

### 3. Database Content
Add Postgres/MySQL node → Format as text → Document Loader → Vector Store

### 4. API Data
Add HTTP Request to API → Format JSON → Document Loader → Vector Store

## Support & Resources

- **N8n Documentation**: https://docs.n8n.io
- **N8n Community**: https://community.n8n.io
- **OpenAI API Docs**: https://platform.openai.com/docs
- **A-VH Contact**: info@a-vh.nl

## Webhook URL Format

Your n8n Chat Trigger URL format:
```
https://[your-instance].app.n8n.cloud/webhook/[webhook-id]/chat
```

Example:
```
https://mwdev-01.app.n8n.cloud/webhook/078c3bf7-d291-44ee-86c4-5f642802e130/chat
```

Components:
- `mwdev-01.app.n8n.cloud` - Your n8n instance
- `078c3bf7-d291-44ee-86c4-5f642802e130` - Webhook ID from Chat Trigger
- `/chat` - Required suffix for Chat Trigger endpoints

---

Your RAG chatbot is now fully configured and ready to answer questions about your website! 🎉

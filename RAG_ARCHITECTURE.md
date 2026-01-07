# RAG Chatbot Architecture

## System Overview

Your website now has an intelligent chatbot powered by RAG (Retrieval Augmented Generation) technology. This means the AI doesn't just give generic responses - it actually searches through your website content to provide accurate, specific answers.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         KNOWLEDGE BASE LAYER                     │
│                     (Updates Daily at 2 AM)                      │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   Schedule Trigger     │
                    │     (Cron: 2 AM)       │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  Fetch Website Content │
                    │    (HTTP Request)      │
                    │   a-vh.nl → HTML       │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   Document Loader      │
                    │  (Parse HTML to Text)  │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │    Text Splitter       │
                    │  (Break into Chunks)   │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  OpenAI Embeddings     │
                    │ (Convert to Vectors)   │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │    Vector Store        │
                    │  (In-Memory Database)  │
                    │  Key: website_content  │
                    └────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        CHAT INTERFACE LAYER                      │
│                      (Real-time Interaction)                     │
└─────────────────────────────────────────────────────────────────┘

    User on Website                      N8N Workflow
    ┌──────────────┐                   ┌──────────────┐
    │              │                   │              │
    │  💬 Chatbot  │────────POST──────▶│ Chat Trigger │
    │   Widget     │    chatInput      │  (Webhook)   │
    │              │    sessionId      │              │
    └──────────────┘                   └──────────────┘
           ▲                                  │
           │                                  ▼
           │                         ┌──────────────┐
           │                         │  RAG Agent   │
           │                         │              │
           │                         │  ┌────────┐  │
           │                         │  │ GPT-4  │  │
           │                         │  └────────┘  │
           │                         │      │       │
           │                         │      ▼       │
           │                         │  ┌────────┐  │
           │                         │  │ Vector │  │
           │                         │  │ Search │  │
           │                         │  └────────┘  │
           │                         │      │       │
           │                         │      ▼       │
           │                         │  ┌────────┐  │
           │                         │  │ Memory │  │
           │                         │  └────────┘  │
           │                         └──────────────┘
           │                                  │
           └──────────JSON Response───────────┘
                     { output: "..." }
```

## Data Flow

### 1. Knowledge Ingestion (Automated)

```
Website HTML
    ↓
Chunked Text (e.g., "A-VH offers AI automation...")
    ↓
Vector Embeddings [0.234, -0.567, 0.891, ...]
    ↓
Stored in Vector Database
```

### 2. User Query Processing

```
User: "What services do you offer?"
    ↓
RAG Agent receives question
    ↓
Agent searches Vector Store
    ↓
Finds relevant chunks:
  - "A-VH offers AI automation for sports..."
  - "Services include data analysis..."
  - "We specialize in production optimization..."
    ↓
GPT-4 generates answer using found context
    ↓
Response: "A-VH offers three main service areas:
1. Sports Analytics - AI-powered performance tracking
2. Financial Services - Automated reporting
3. Production Optimization - Process automation"
    ↓
Displayed to user in chat widget
```

## Component Breakdown

### Frontend (Your Website)

**File**: `components/widgets/N8nChatbot.tsx`
- Renders chat UI
- Manages conversation state
- Sends requests to n8n webhook
- Handles responses and errors

### Backend (N8N Workflow)

**Nodes**:
1. **Schedule Trigger** - Cron job (daily 2 AM)
2. **HTTP Request** - Fetches website HTML
3. **Document Loader** - Parses HTML to text
4. **Text Splitter** - Creates manageable chunks
5. **OpenAI Embeddings** - Vectorizes text
6. **Vector Store** - Stores & retrieves vectors
7. **Chat Trigger** - Webhook endpoint
8. **RAG Agent** - Orchestrates AI logic
9. **OpenAI Chat Model** - GPT-4 responses
10. **Window Buffer Memory** - Conversation history

### AI Layer (OpenAI)

**Services Used**:
- **Embeddings API** - text-embedding-ada-002
  - Converts text to vectors
  - Used for both ingestion and search
  
- **Chat API** - gpt-4-turbo
  - Generates responses
  - Uses retrieved context
  - Maintains conversation flow

## Key Features

### 1. Semantic Search
Traditional search: Exact keyword matching
RAG search: Understands intent and meaning

Example:
- User: "How can you help with sports?"
- System finds: "Sports Analytics", "Performance Tracking", "Athlete Data"
- Even though user didn't say exact words!

### 2. Conversation Memory
Each user session remembers context:
```
User: "What services do you offer?"
Bot: "We offer Sports, Finance, and Production services."
User: "Tell me more about the first one"  ← Bot knows "first one" = Sports
Bot: "Our Sports Analytics service includes..."
```

### 3. Source Attribution
Bot answers are grounded in actual website content, not hallucinated:
```
✅ "According to our website, A-VH specializes in..."
❌ "I think A-VH might do..."
```

## Scalability

### Current Setup
- ✅ Single page scraping
- ✅ Daily updates
- ✅ In-memory storage
- ✅ Session-based memory

### Easy Upgrades
- 📈 Multi-page scraping (add more HTTP nodes)
- 📈 Real-time updates (increase scrape frequency)
- 📈 Persistent storage (use Pinecone/Qdrant)
- 📈 Cross-session memory (add database)
- 📈 Analytics (add tracking nodes)

## Performance

**Typical Response Time**: 2-4 seconds
- Vector search: ~500ms
- GPT-4 generation: 1-3s
- Network overhead: ~500ms

**Cost per Query**: ~$0.01-0.03
- Embeddings: $0.0001
- GPT-4-turbo: $0.01-0.03 (depends on context length)

## Monitoring

Check n8n "Executions" tab for:
- ✅ Successful scrapes
- ✅ Chat interactions
- ✅ Error rates
- ✅ Response times
- ✅ API costs

## Security

✅ **Webhook authentication** - Built into n8n
✅ **CORS handling** - Automatic with n8n Cloud
✅ **Session isolation** - Each user gets unique session
✅ **No PII storage** - Chat history in memory only
✅ **Rate limiting** - Can add to n8n workflow

## Future Enhancements

1. **Multi-language support** - Detect & respond in user's language
2. **Rich media responses** - Images, links, cards
3. **Intent classification** - Route to specific functions
4. **Feedback loop** - Learn from user thumbs up/down
5. **Analytics dashboard** - Track popular questions
6. **Live handoff** - Transfer to human agent

---

Your RAG chatbot combines the power of modern AI with the accuracy of your actual website content! 🚀

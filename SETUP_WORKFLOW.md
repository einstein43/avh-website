# Quick Setup Guide - Update Your N8N Workflow

## 🚨 Important: Update Website URL in N8N

Your n8n workflow currently has a placeholder for the website URL. You need to update it with your actual website URL.

### Steps:

1. **Open your n8n workflow** in the n8n editor
   - URL: https://mwdev-01.app.n8n.cloud

2. **Find the "Fetch Website Content" node** (HTTP Request node)
   - It's the second node in the scheduled flow
   - Currently shows: `<__PLACEHOLDER_VALUE__Website URL to scrape__>`

3. **Update the URL field**
   - Replace with: `https://a-vh.nl` (or your domain)
   - Or if testing locally: `http://localhost:3000`

4. **Save the workflow**
   - Click the "Save" button in the top right

5. **Test the scraper manually**
   - Click on the "Schedule Trigger" node
   - Click "Execute Node" 
   - Watch the flow execute
   - Verify the "Vector Store" node receives data

6. **Activate the workflow**
   - Toggle the switch in the top right to ON
   - This enables the daily 2 AM scraping schedule

## What Gets Scraped?

The workflow will:
- Fetch your entire website homepage HTML
- Split it into manageable chunks
- Create vector embeddings using OpenAI
- Store in an in-memory vector database
- Use this knowledge to answer user questions

## Testing the Chat

Once the scraper has run at least once:

1. Open your website
2. Click the chat bubble in the bottom right
3. Try asking:
   - "What services does A-VH offer?"
   - "Tell me about your AI solutions"
   - "How can I contact you?"

The AI will search the scraped content and provide accurate answers!

## Multi-Page Scraping (Optional)

Want to scrape multiple pages? You have options:

### Option 1: Scrape sitemap
1. Add another HTTP Request node to fetch `/sitemap.xml`
2. Parse XML to get all URLs
3. Loop through and scrape each page

### Option 2: Manual multiple URLs
1. Duplicate the "Fetch Website Content" node
2. Point each to different pages
3. All feed into the same Vector Store

### Option 3: Use a crawler
1. Replace HTTP Request with a crawler integration
2. Configure to follow links
3. Set depth limit (e.g., 3 levels deep)

## Monitoring

Check the "Executions" tab in n8n to:
- See when the scraper last ran
- View any errors
- Check chat interactions
- Monitor API usage

## Current Status

✅ **Workflow imported and saved**
✅ **Webhook URL configured in website**
✅ **Chat widget installed and styled**
⚠️ **Need to update website URL in workflow**
⚠️ **Need to run initial scrape**
⚠️ **Need to activate workflow**

Once you complete these steps, your AI chatbot will be fully operational! 🎉

---

**Next Step**: Go update that URL in n8n now! 👉

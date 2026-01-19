Prerequisites
Node.js: Install on your system.
n8n Instance: A running n8n server (cloud or self-hosted).
Claude Desktop App: Recommended for optimal integration (Pro plan for features like "artifacts"). 
Setup Steps (Claude Desktop)
Install n8n-MCP Server:
Open your terminal/command prompt.
Run npx n8n-mcp (or npm install -g n8n-mcp then n8n-mcp) to start the server.
Note the URL (e.g., http://localhost:5678) and the Bearer Token/API Key displayed.
Configure Claude Desktop:
Open Claude Desktop, go to Settings > Developer > Edit Config (or similar developer settings).
Paste the provided configuration, replacing placeholders with your n8n API URL and API Key (found in n8n settings).
Restart Claude Desktop.
Connect in Claude:
In a new Claude Project, use the provided MCP Project Setup instructions (from the n8n-mcp GitHub repo) as your system prompt to activate the tool.
Claude will now recognize n8n as a tool, allowing you to ask it to build workflows by pasting JSON or using prompts
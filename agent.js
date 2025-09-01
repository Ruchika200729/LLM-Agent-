/**
 * LLM Agent - Advanced AI Assistant
 * NavyaAI - Advanced AI Assistant
* v2.8.0 (Updated: AI Pipe integration + bug fixes)
* Author: Ruchika (Original) & Assistant (fixes)
*/
class LLM Agent {
class NavyaAI {
constructor() {
this.version = '2.8.0';
this.initialized = false;
@@ -62,9 +62,9 @@ class LLM Agent {
this.hideLoadingScreen();
this.emit('app:initialized');
this.showWelcomeMessage();
            console.log(`LLM Agent v${this.version} initialized successfully`);
            console.log(`NavyaAI v${this.version} initialized successfully`);
} catch (error) {
            console.error('Failed to initialize LLM Agent:', error);
            console.error('Failed to initialize NavyaAI:', error);
this.showToast('error', 'Initialization Error', `Failed to start the application: ${error.message || error}`);
try { this.hideLoadingScreen(); } catch(_) {}
}
@@ -579,7 +579,7 @@ class LLM Agent {
messageEl.className = `message ${message.role}`;
messageEl.dataset.messageId = message.id;

            const senderName = { user: 'You', assistant: 'LLM Agent', system: 'System', tool: 'Tool' }[message.role] || message.role;
            const senderName = { user: 'You', assistant: 'NavyaAI', system: 'System', tool: 'Tool' }[message.role] || message.role;
const avatarIcon = { user: 'fa-user', assistant: 'fa-robot', system: 'fa-cog', tool: 'fa-wrench' }[message.role] || 'fa-comment';

// If content is a string and marked exists, render markdown
@@ -996,7 +996,7 @@ class LLM Agent {
showWelcomeMessage() {
const conv = this.state.conversations.get(this.state.currentConversationId);
if (conv && conv.messages.length === 0) {
            this.addMessage('assistant', 'Welcome to LLM Agent! How can I assist you?');
            this.addMessage('assistant', 'Welcome to NavyaAI! How can I assist you?');
}
}

@@ -1150,5 +1150,5 @@ class LLM Agent {

// initialize the app
document.addEventListener('DOMContentLoaded', () => {
    window.agentFlow = new LLM Agent();
    window.agentFlow = new NavyaAI();
});

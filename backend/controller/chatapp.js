// Import necessary modules and models
const ChatMessage = require('../models/chatapp');

// Controller method to handle storing chat messages
async function storeChatMessage(req, res) {
    const { userId, message } = req.body;

    try {
        // Store the chat message in the database
        await ChatMessage.create({ userId, message });
        
        res.status(201).json({ message: 'Chat message stored successfully' });
    } catch (error) {
        console.error('Error storing chat message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { storeChatMessage };

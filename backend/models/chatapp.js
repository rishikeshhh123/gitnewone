// models/chatMessage.js
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const ChatMessage = sequelize.define('chatMessage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = ChatMessage;

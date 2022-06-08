const { Schema, model } = require("mongoose");

const ChatMessageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const ChatMessage = model("ChatMessage", ChatMessageSchema);
module.exports = ChatMessage;

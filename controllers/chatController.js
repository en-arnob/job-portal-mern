const Conversation = require("../models/Conversation");
const ChatMessage = require("../models/ChatMessage");

exports.newConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json({
      status: "success",
      savedConversation,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to create new Conversation",
      error: err,
    });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json({
      status: "success",
      conversation,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to create new Conversation",
      error: err,
    });
  }
};

exports.postMessage = async (req, res) => {
  const newMessage = new ChatMessage(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json({
      status: "success",
      savedMessage,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to find the Conversation",
      error: err,
    });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const messages = await ChatMessage.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json({
      status: "success",
      messages,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to find message",
      error: err,
    });
  }
};

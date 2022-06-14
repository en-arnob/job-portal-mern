const Conversation = require("../models/Conversation");
const ChatMessage = require("../models/ChatMessage");

exports.newConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const allConversations = await Conversation.find({
      members: { $all: [req.body.senderId, req.body.receiverId] },
    });
    console.log(allConversations);
    if (!(allConversations.length > 0)) {
      const savedConversation = await newConversation.save();
      return res.status(200).json({
        status: "success",
        savedConversation,
      });
    }
    console.log("convo matched");
    return res.status(200).json({
      status: "success",
      message: "Existed conversation",
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
    }).sort([["updatedAt", -1]]);
    res.status(200).json({
      status: "success",
      conversation: conversation,
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
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "failed to find message",
      error: err,
    });
  }
};

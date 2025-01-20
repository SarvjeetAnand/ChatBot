const chatbotModel = require('../models/chatbotModel');

const getChatResponse = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await chatbotModel.getResponse(message);
    res.json({ reply: response });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};

module.exports = { getChatResponse };

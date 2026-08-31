const Feedback = require("./feedbackLib");



const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
}

const createFeedback = (req, res) => {
  const {sender, message, rating, platform } = req.body;

  const newFeedback = Feedback.addOne(sender,message,rating,platform);

  if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

const getFeedbackById = (req, res) => {
  const id = req.params.feedbackId;
  const feedback = Feedback.findById(id, req.body);

  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "error" });
  }
 
  
};

const updateFeedback = (req, res) => {
  const id = req.params.feedbackId;
  const blabla = Feedback.update(id, req.body);
  
  if (blabla) {
    res.json(blabla)
  } else {
    res.status(404).json({ message: "error" });
  }
};

const deleteFeedback = (req, res) => {
  res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
}
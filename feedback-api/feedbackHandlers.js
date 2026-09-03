const Feedback = require("./feedbackLib");



const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
}

const createFeedback = (req, res) => {
  const {sender, message, rating, platform } = req.body;
  if (!sender || !message || !platform || rating < 1 || rating > 5) {
    return res.status(400).json({
      message:":("
    })
  }

  const newFeedback = Feedback.addOne(sender,message,rating,platform);

  if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = Feedback.findById(feedbackId);

  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

const updateFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const blabla = Feedback.update(feedbackId, req.body);
  
  if (blabla) {
    res.json(blabla)
  } else {
    res.status(404).json({ message: "error" });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const isDeleted = Feedback.deleteOneById(feedbackId);

  if (isDeleted) {
    res.json({ message: "Feedback deleted successfully" });
  } else {
    // Handle deletion failure (e.g., pet not found)
    res.status(404).json({ message: "not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
}
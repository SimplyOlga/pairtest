const feedbacks = [];
let counterId = 1;
// ADD ONE
function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: counterId++,
    sender,
    message,
    rating,
    platform
  };

  feedbacks.push(newFeedback);

  return newFeedback;
};


// GET ALL
function getAll() {
  return feedbacks;
}
// FIND BY ID
function findById(id) {
  const feedback = feedbacks.find((target) => target.id == id);

  if (feedback) {
    return feedback;
  }
  
  return false;
}

function deleteOneById(id) {
  const feedback = findById(id);

  if (feedback) {
    const initialLength = feedbacks.length;

    feedbacks = feedbacks.filter(
      (item) => item.id != id
    );

    return feedbacks.length < initialLength;
  }

  return false;
}

// UPDATE PARTIALLY
function update(id, stat) {
  const target = findById(id);
  if (target) {
    if (stat.sender) {
      target.sender = stat.sender;
    }
    if (stat.message) {
      target.message = stat.message;
    }
    
    if (stat.rating) {
      target.rating = stat.rating;
    }
    
    if (stat.platform) {
      target.platform = stat.platform;
    }
    
    return target;
  }
  return false;

}

module.exports = {
  addOne,
  getAll,
  findById,
  update,
  deleteOneById

};



addOne("John Smith", "Great session!", 5, "mobile");
addOne("Anna Brown", "Very useful examples.", 4, "desktop");

console.log("getAll called:", getAll());



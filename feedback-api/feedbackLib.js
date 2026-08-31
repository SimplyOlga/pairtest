const feedbacks = [];
let counterId = 1;
// ADD ONE
function addOne(sender, message, rating, platform) {
  const unit = {
    id: counterId++,
    sender,
    message,
    rating,
    platform
  };

  feedbacks.push(unit);

  return unit;
};


// GET ALL
function getAll() {
  return feedbacks;
}

module.exports = {
  addOne,
  getAll,
};

addOne("John Smith", "Great session!", 5, "mobile");
addOne("Anna Brown", "Very useful examples.", 4, "desktop");

console.log("getAll called:", getAll());



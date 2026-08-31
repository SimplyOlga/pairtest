const feedbacks = [];
let counterId = 1;

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



function getAll() {
  return feedbacks;
}

module.exports = {
  addOne,
  getAll,
};

if (require.main === module) {
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  console.log(result);
}

module.exports = {
  addOne,
};
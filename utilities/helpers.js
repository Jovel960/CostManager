function report() {
  if (!new.target) return;
  this.food = [];
  this.health = [];
  this.housing = [];
  this.education = [];
  this.transportation = [];
  this.other = [];
}

const cleanUserCosts = (userCosts) => {
  const cleanedCosts = userCosts.map((cost) => {
    const { _id, __v, user_id, ...cleanedCost } = cost.toObject();
    return cleanedCost;
  });
  console.log(cleanedCosts);
  return cleanedCosts;
};

const reportForUser = (userCosts) => {
  const userReport = new report();

  for (const cost of userCosts) {
    userReport[cost.category].push(cost);
  }
  return userReport;
};

module.exports = { reportForUser, cleanUserCosts };

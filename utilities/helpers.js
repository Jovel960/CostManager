//Report object function constructor
function report() {
  if (!new.target) return;
  this.food = [];
  this.health = [];
  this.housing = [];
  this.education = [];
  this.transportation = [];
  this.other = [];
}
//This method is used to filter properties from the Cost document
const cleanUserCosts = (userCosts) => {
  const cleanedCosts = userCosts.map((cost) => {
    const { _id, __v, user_id, ...cleanedCost } = cost.toObject();
    return cleanedCost;
  });
  console.log(cleanedCosts);
  return cleanedCosts;
};
//This method create new report and fill each property according to userCosts
const reportForUser = (userCosts) => {
  const userReport = new report();

  for (const cost of userCosts) {
    userReport[cost.category].push(cost);
  }
  return userReport;
};

module.exports = { reportForUser, cleanUserCosts };

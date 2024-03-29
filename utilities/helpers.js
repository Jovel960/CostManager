// Yovel Hadad 207125329 Yarin Rahamim 205833668

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
  return cleanedCosts;
};

//This method is used to filter properties from the Report document
const cleanUserReport = (userReport) => {
  const { _id, __v, user_id, ...cleanedReport } = userReport.toObject();
  return cleanedReport;
};

//This method create new report and fill each property according to userCosts
const reportForUser = (userCosts) => {
  const userReport = new report();

  for (const cost of userCosts) {
    if (userReport[cost.category]) userReport[cost.category].push(cost);
    else userReport["other"].push(cost);
  }
  return userReport;
};

module.exports = { reportForUser, cleanUserCosts, cleanUserReport };

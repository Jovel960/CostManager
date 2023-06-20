// Yovel Hadad 207125329 Yarin Rahamim 205833668

const app = require("./app");
const config = require("./utilities/config")

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));

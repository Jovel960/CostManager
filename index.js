const app = require("./app");
const config = require("./utilities/config")

app.listen(config.PORT , () => console.log(`Listening on port ${config.PORT}`));

const app = require("./app");

require("./database");

app.listen(process.env.PORT || 3000);
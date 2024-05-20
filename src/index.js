const express = require("express");

const { variables } = require("./config/variables");
const routes = require("./routes/routes");
const responseHandler = require("./utils/responseHandler");
const databaseInit = require("./config/database");


const app = express();
databaseInit();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseHandler);
app.use(routes);


// Start server
app.listen(variables.port, () => {
  console.log(`API server listening on port ${variables.port}`);
});

require("dotenv").config();
const port = process.env.PORT || 8081;

const dbConfig = {
  mongoConnectUrl: process.env.MONGO_CONNECTION_STRING,
};
exports.variables = {
  port,
  dbConfig,
};

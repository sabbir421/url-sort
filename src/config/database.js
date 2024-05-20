const mongose = require("mongoose");
const { variables } = require("./variables");


const databaseInit = () => {
  mongose
    .connect(variables.dbConfig.mongoConnectUrl, {
      dbName: "sortUrl",
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((e)=>{
        console.log(e);
    })}

    module.exports=databaseInit
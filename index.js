const mongoose = require('mongoose');
const app = require("../NodeJS-API-Authentication/app");

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Node-Js-Auth", {
    });
    console.log("Db Connected!!");

    const onListening = () => {
      console.log("Listening on Port 5000");
    };

    app.listen(5000, onListening);
  } catch (err) {
    console.error(`You are getting an error while connecting the database ${err.message}`);
    throw err;
  }
})();

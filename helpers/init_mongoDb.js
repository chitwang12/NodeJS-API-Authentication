const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log("Db Connected!!");
  } catch (err) {
    console.error(`You are getting an error while connecting the database ${err.message}`);
    throw err;
  }
})();

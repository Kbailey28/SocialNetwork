const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongodb connected...');
  } catch (err) {
    console.error(err.message);
    //if fails exit
    process.exit(1);
  }
};

module.exports = connectdb;

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});
if (mongoose) {
  console.log(`DATABSE CONNECTED AT ${process.env.APP_PORT}`);
} else {
  console.log('DATABASE NOT CONNECTED');
}

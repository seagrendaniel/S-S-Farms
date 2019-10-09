const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// mongoose.connect(
//   'mongodb://localhost:27017/ssfarms',
//   { useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );


const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
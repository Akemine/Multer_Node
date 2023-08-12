const mongoose = require('mongoose');
require('dotenv').config()

mongoose
  .connect(
    process.env.MONGO_SRV
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log(err);
  });

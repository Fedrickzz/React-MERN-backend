const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('db online');
  } catch (error) {
    console.log(error);
    // throw new Error('Error en iniciar DB');
  }
};

module.exports = {
  dbConnection,
};

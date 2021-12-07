const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error en la conexion", error);
    process.exit(1);
  }
};

module.exports = conectarDB;

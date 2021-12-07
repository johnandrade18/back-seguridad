const mongoose = require("mongoose");

const ClientesSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  empresa:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  telefono: {
    type: String,
    required: false,
    trim: true
  },
  creado: {
    type: Date,
    default: Date.now()
  },
  vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Usuarios'
  }
});

module.exports = mongoose.model("Cliente", ClientesSchema);

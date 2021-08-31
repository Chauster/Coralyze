const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    subject: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 3,
    },
    description: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

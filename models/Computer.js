//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ComputerSchema = new Schema({
  type: {
      type: String,
      required: true
    },
  checkedOut: Boolean,
  studentName : String,
  studentId : String,
  date: Date
});

const Computer = mongoose.model("Computer", ComputerSchema);

module.exports = Computer;
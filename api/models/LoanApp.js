const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  employmentType: String,
  yearlyIncome: Number,
  bankName: String,
  employerName: String,
  state: String,
  district: String,
  residenceType: String,
  desiredLoanAmount: Number,
  desiredLoanTenure : Number,
  emailId : String,
  phoneNumber : String,
  firstName: String,
  middleName: String,
  lastName : String,
  dob: String,
  // dobMonth : String,
  // dobYear : String,
  panNumber : String,
  monthlyEMI : Number,

});

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;
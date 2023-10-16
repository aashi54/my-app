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
  emailId : String,
  phoneNumber : String,
});

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;
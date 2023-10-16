// routes/loanApplications.js
const router = require("express").Router();
const express = require('express');
const LoanApplication = require('../models/LoanApp');

// Create a new loan application
router.post('/', async (req, res) => {
  try {
    const loanApplication = new LoanApplication(req.body);
    console.log(loanApplication);
    
    await loanApplication.save();
    res.status(201).json({ message: 'Loan application created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const masterAccount = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
const MasterAccount = mongoose.model("MasterAccount", masterAccount);

const user = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: "Female",
  },
  type: {
    type: String,
    default: "customer",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  account: { type: mongoose.Types.ObjectId, ref: "MasterAccount" },
});
const User = mongoose.model("User", user);

const branchDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  IFSC: {
    type: String,
    required: true,
  },
  MICR: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  account: { type: mongoose.Types.ObjectId, ref: "MasterAccount" },
});
const BranchDetails = mongoose.model("BranchDetails", branchDetail);

const savingsAccount = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  account: { type: mongoose.Types.ObjectId, ref: "MasterAccount" },
});
const SavingsAccount = mongoose.model("SavingsAccount", savingsAccount);

const fixedAccount = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  maturityDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  account: { type: mongoose.Types.ObjectId, ref: "MasterAccount" },
});

const FixedAccount = mongoose.model("FixedAccount", fixedAccount);

module.exports = {
  User,
  MasterAccount,
  BranchDetails,
  SavingsAccount,
  FixedAccount,
};

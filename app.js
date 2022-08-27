const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/masai", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

const PORT = 3030;
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});

const Models = require("./model");
console.log(Models);

app.get("/users", async (req, res) => {
  try {
    let users = await Models.User.find();
    res.status(200).json({
      status: "Success!",
      results: users.length,
      data: { users },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.get("/all-branches", async (req, res) => {
  try {
    let branches = await Models.BranchDetails.find();
    res.status(200).json({
      status: "Success!",
      results: branches.length,
      data: { branches },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.get("/master-accounts", async (req, res) => {
  try {
    let accounts = await Models.MasterAccount.find();
    res.status(200).json({
      status: "Success!",
      results: accounts.length,
      data: { accounts },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.get("/savings-accounts", async (req, res) => {
  try {
    let accounts = await Models.SavingsAccount.find();
    res.status(200).json({
      status: "Success!",
      results: accounts.length,
      data: { accounts },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.get("/fixed-accounts", async (req, res) => {
  try {
    let accounts = await Models.FixedAccount.find();
    res.status(200).json({
      status: "Success!",
      results: accounts.length,
      data: { accounts },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.get("users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const user = await await Models.User.findById(id);
    res.status(200).json({
      status: "Success!",
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.post("/userSavings", async (req, res) => {
  try {
    let newAccount = await Models.SavingsAccount.create(req.body);

    res.status(201).json({
      status: "Success!",
      data: { "Savings Account": newAccount },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.post("/userFixed", async (req, res) => {
  try {
    let newAccount = await Models.FixedAccount.create(req.body);

    res.status(201).json({
      status: "Success!",
      data: { "Savings Account": newAccount },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    console.log(req.time);
    let { id } = req.params;
    const account = await Models.FixedAccount.findByIdAndDelete(id);
    res.status(200).json({
      status: "Success!",
      deleted: { account },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    console.log(req.time);
    let { id } = req.params;
    const account = await Models.SavingsAccount.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "Success!",
      updated: { account },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail!",
      message: err,
    });
  }
});

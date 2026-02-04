require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UsersModel } = require("./model/UsersModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authMiddleware = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

// ---------------- MIDDLEWARE ----------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- DB CONNECTION ----------------
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ---------------- AUTH ROUTES ----------------

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UsersModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UsersModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: "Signup successful" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
      { userId: user._id },
      "piyush",
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token,name: user.name, });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// ---------------- PROTECTED ROUTES ----------------

// GET HOLDINGS
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// GET POSITIONS
app.get("/allPositions",  async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// GET ORDERS
app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// PLACE ORDER (BUY/SELL)
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    console.log("ORDER RECEIVED:", req.body);

    // ---------- BUY ----------
    if (mode === "BUY") {
      await OrdersModel.create({ name, qty, price, mode });

      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        holding.qty += qty;
        holding.price = price;
        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }

      return res.status(201).json({ message: "Buy order executed" });
    }

    // ---------- SELL ----------
    if (mode === "SELL") {
      const holding = await HoldingsModel.findOne({ name });

      if (!holding)
        return res.status(400).json({ error: "You do not own this stock" });

      if (holding.qty < qty)
        return res.status(400).json({ error: "Not enough quantity to sell" });

      await OrdersModel.create({ name, qty, price, mode });

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }

      return res.status(201).json({ message: "Sell order executed" });
    }

  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({ error: "Order failed" });
  }
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

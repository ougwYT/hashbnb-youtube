import { Router } from 'express';
import { connectToDatabase } from "../../config/db.js";
import express from "express";
import User from "./model.js"
import bcrypt from "bcryptjs"

const bcryptSalt = bcrypt.genSaltSync();

const router = Router();

// Middleware to parse JSON
router.use(express.json());


router.get("/", async (req, res) => {
  // Database connection is already established at startup
  try {
    const { page = 1, limit = 10 } = req.query;
    const userDoc = await User.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ message: "Failed to create a new user", error });
  }
})


router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);
  connectToDatabase();
  try {
    const newUserDocument = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json(newUserDocument);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;

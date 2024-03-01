const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "XXXYYYZZZ";
const zod = require("zod");
const { User } = require("../models/user");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  try {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Email already taken / Incorrect inputs",
      });
    }

    const existingUser = await User.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.status(411).json({
        message: "Email already taken/Incorrect inputs",
      });
    }

    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const userId = user._id;

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );

    res.json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.error(error.message);
  }
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  try {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Email already taken / Incorrect inputs",
      });
    }

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        JWT_SECRET
      );
      res.cookie("token", token).json("pass ok");
    //   res.json({ token: token });
      return;
    }

    res.status(411).json({
      message: "Error while logging in",
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;

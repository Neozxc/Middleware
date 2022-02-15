const { Router } = require("express");
const { addUser } = require("./userControllers");
const { hasPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hasPass, addUser);

module.exports = userRouter;
const res = require("express/lib/response");
const User = require("./userModel");

exports.addUser = async () => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser });
    } catch (error) {
        console.log(error);
    }
};
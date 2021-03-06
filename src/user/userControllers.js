const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser });
        console.log("Successfully worked.");
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};
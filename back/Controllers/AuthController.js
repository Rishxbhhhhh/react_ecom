const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
    try {
        const { firstname,lastname, email, password} = req.body;
        console.log(req.body);
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ firstname,lastname, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            });

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(403)
                .json({ message: 'Auth failed wrong email', success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: 'Auth failed wrong password', success: false });
        }

        const jwToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login success",
                success: true,
                jwToken,
                email,
                name: user.firstname
            });

    } catch (err) {
        console.log(err);
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

module.exports = {
    signup, login
}
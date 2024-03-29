const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

//REGISTER
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSPHRASE).toString()
	});

	try {
		const savedUser = await newUser.save();
		const { password, ...others } = savedUser._doc;
		res.status(201).json(others);
	} catch(err) {
		console.log(err);
		res.status(500).json(err);
	}
	
});

// LOGIN
router.post("/login", async(req, res) => {
	try {
		const user = await User.findOne({email: req.body.email});
		if (!user) return res.status(401).json("Wrong credentials");
		
		const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASSPHRASE);
		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		if (OriginalPassword !== req.body.password) return res.status(401).json("Wrong Credentials");

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin
			},
			process.env.JWT_SECRET,
			{expiresIn: '365d'}
		);

		const { password, ...others } = user._doc;
		return res.status(200).json({...others, accessToken});
	}catch(err) {
		console.log(err)
		return res.status(500).json(err);
	}
});

module.exports = router;
const router = require("express").Router();
const { 
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin
} = require("./verifyToken");
const Order = require('../models/Order');


//CREATE

router.post("/", async(req, res) => {
	const newOrder = new Order(req.body) 

	try {
		await newOrder.save();
		res.status(200).json("OK");
	}catch(err) {
		res.status(500).json(err);
	}
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	console.log(req.body);
	try {
		const updatedOrder = await Order.findByIdAndUpdate(req.params.id, 
			{
				$set: {...req.body.order}
			}, 
			{
				new: true
			}
		);
		console.log(updatedOrder);
		return res.status(200).json(updatedOrder);
	} catch(err) {
			console.log(err);
			return res.status(500).json(err);
	};
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json("Order has been deleted");
	}catch(err) {
		res.status(500).json(err);
	}
});

//GET USER ORDERS
router.get("/find/:email", verifyTokenAndAuthorization, async(req, res) => {
	let email = req.params.email;
	try {
		const orders = await Order.find({email: email});

		res.status(200).json(orders);
	}catch(err) {
		res.status(500).json(err);
	}
});

//GET ALL 
router.get("/", verifyTokenAndAdmin, async(req, res) => {
	try{
		let	orders = await Order.find();
		res.status(200).json(orders);
	} catch(err) {
		res.status(500).json(err);
	}
});

// GET ONE
router.get("/:id", verifyTokenAndAdmin, async(req, res) => {
	let orderId = req.params.id;
	try {
		let order = await Order.findById(id);
		res.status(200).json([order]);
	} catch(err) {
		res.status(500).json(err);
	}
})

module.exports = router;
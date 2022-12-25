const router = require("express").Router();
const { 
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin
} = require("./verifyToken");
const Order = require('../models/Order');


//CREATE

router.post("/", async(req, res) => {
	try {
		const newOrder = new Order(req.body) 
		await newOrder.save();
		res.status(200).json(newOrder);
	}catch(err) {
		res.status(500).json(err);
	}
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		console.log(req.body);
		let orderId = req.params.id
		if (orderId == undefined) throw "Required fields missing";
		const updatedOrder = await Order.findByIdAndUpdate(orderId, 
			{
				$set: {...req.body}
			}, 
			{
				new: true
			}
		);
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
	try {
		let email = req.params.email;
		if (email == undefined) throw "Required fields missing";
		const orders = await Order.find({email: email});

		res.status(200).json(orders);
	}catch(err) {
		res.status(500).json(err);
	}
});

//GET ALL 
router.get("/", verifyTokenAndAdmin, async(req, res) => {
	try{
		let	orders = await Order.find().sort({_id: 1});
		res.status(200).json(orders);
	} catch(err) {
		res.status(500).json(err);
	}
});

// GET ONE
router.get("/:id", verifyTokenAndAdmin, async(req, res) => {
	let orderId = req.params.id;
	try {
		let order = await Order.findById(orderId);
		res.status(200).json([order]);
	} catch(err) {
		res.status(500).json(err);
	}
})

module.exports = router;
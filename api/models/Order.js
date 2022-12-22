const mongoose = require("mongoose");

// Order States:
/*
	Pending
	Accepted
	Fulfilled
*/

const OrderSchema = new mongoose.Schema(
	{
		name: { type: String, required:true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		event: { type: String, required: true},
		location: { type: String, required: true },
		date: { type: Date, required: true },
		status: {type:String, default: "pending"} 
	},
	{timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		name: { type: String, required:true },
		email: { type: String, required: true },
		date: { type: String, required: true },
		address: { type: Object, required: true},
		status: {type:String, default: "pending"} 
	},
	{timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);
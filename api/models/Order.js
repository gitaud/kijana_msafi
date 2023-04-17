const mongoose = require("mongoose");

// Order States:
/*
	Pending
	Accepted
	Fulfilled
*/

const OrderSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, default: "" },
		idNumber: { type: Number, required: true, default: 0 },
		email: { type: String, required: true, default: "" },
		phone: { type: String, required: true, default: "" },
		boxNo: { type: String, required: true, default: "" },
		locationResidential: { type: String, required: true, default: "" },
		office: { type: String, required: true, default: "" },
		dateOfFunction: { type: Date, required: true },
		time: { type: String, required: true, default: "" },
		venue: { type: String, required: true, default: "" },
		noOfPeopleAttending: { type: Number, required: true, default: 0 },
		kienyejiMukimo: { type: Boolean, required: true, default: true },
		pilau: { type: Boolean, required: true, default: true },
		chapati: { type: Boolean, required: true, default: true },
		whiteRice: { type: Boolean, required: true, default: true },
		mixedVegetables: { type: Boolean, required: true, default: true },
		salad: { type: Boolean, required: true, default: true },
		njahiBlackBeans: { type: Boolean, required: true, default: true },
		steamedCabbages: { type: Boolean, required: true, default: true },
		beefStew: { type: Boolean, required: true, default: true },
		sodaQty: { type: Number, required: true, default: 0 },
		chickenNo: { type: Number, required: true, default: 0 },
		fruitsNoOfPlates: { type: Number, required: true, default: 0 },
		roastedRibs: { type: Number, required: true, default: 0 },
		mineralWaterNoOfBottles: { type: Number, required: true, default: 0 },
		friedPotatoes: { type: Number, required: true, default: 0 },
		ugaliNoOfPlates: { type: Number, required: true, default: 0 },
		transportInKms: { type: Number, required: true, default: 0 },
		location: { type: String, required: true, default: "" },
		commitmentFeePaymentDate: { type: Date, required: true },
		depositFeePaymentDate: { type: Date, required: true },
		balancePaymentDate: { type: Date, required: true },
		termsAgreed: { type: Date, required: true },
		status: {type: String, default: "pending"} 
	},
	{timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);
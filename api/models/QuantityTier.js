const mongoose = require("mongoose");

// SETS THE PRICES FOR EACH TIER OF PEOPLE e.g. 1000 and over, ksh 250 per person

const QuantityTierSchema = new mongoose.Schema(
  {
    quantity: { type: String, required: true, default: "" },
    pricePerUnit: { type: Number, required: true, default: 0 },
    unit: { type: String, required: true, default: "person" } // default is person
  }, { timestamps: true }
);

module.exports = mongoose.model('QuantityTier', QuantityTierSchema);
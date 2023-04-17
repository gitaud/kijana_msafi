const mongoose = require("mongoose");

// SETS THE PRICES FOR EACH ITEM OFFERED IN THE 'OTHERS' SECTION

const SubItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "" },
  }
);

const SubItem = new mongoose.model('SubItem', SubItemSchema);

const PriceItemSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    isAvailable: { type: Number, required: true },
    subItems: {
      type: Array,
    }
  }, { timestamps: true}
);

const PriceItem = mongoose.model('PriceItem', PriceItemSchema);

module.exports = { SubItem, PriceItem };
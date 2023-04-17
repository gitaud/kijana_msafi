/* For getting menu items and their prices, 
  and the prices charged per person depending 
  on the number of people in an event
*/

const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");
const { PriceItem, SubItem } = require("../models/PriceItem");
const QuantityTier = require("../models/QuantityTier");

// GET PRICES OF SINGLE ITEMS AND PRICES FOR MAIN ITEMS PER NO OF PEOPLE ATTENDING
router.get("/pricesAndTiers", async(req, res) => {
  try {
    let prices = await PriceItem.find({});
    let tiers = await QuantityTier.find({});
    return res.json(200).data([prices, tiers]);
  } catch(err) {
    console.log(err);
    return res.status(500).json("Error");
  }
});

// CREATE A PRICE ITEM
router.post("/price", verifyTokenAndAdmin, async(req, res) => {
  try {
    let price = new PriceItem(req.body);
    await price.save();
    return res.status(200).json(price);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// CREATE A QUANTITY TIER
router.post("/tier", verifyTokenAndAdmin, async(req, res) => {
  try {
    let tier = new QuantityTier(req.body);
    await tier.save();
    return res.status(200).json(tier);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// UPDATE A PRICE
router.put("/price/:id", verifyTokenAndAdmin, async(req, res) => {
  try {
    let id = req.params.id;
    if (id === undefined) throw "Required fields missing";
    const updatedPrice = await PriceItem.findByIdAndUpdate(id,
      {
        $set: { ...req.body }
      },
      {
        new: true
      }
    ) ;
    return res.status(200).json(updatedPrice);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

// UPDATE A QUANTITY


export default router;
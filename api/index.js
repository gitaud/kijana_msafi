const dotenv = require('dotenv');

dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI,
	{useNewUrlParser: true, 
	useUnifiedTopology: true}
).then(() => {
	console.log("DB Connection Successful!");
}).catch((err) => {
	console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running!");
});
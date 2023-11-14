//external imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const serverless = require('serverless-http');

//internal imports
const connectDB = require("../config/db");
const userRoute = require("../routes/UserRoutes");
const newProduct = require("../routes/ProductRoutes");
const paymentRoute = require("../routes/PaymentRoutes");

const corsOptions = {
	origin: '*',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}

connectDB();

const app = express();
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

//port
const PORT = process.env.PORT || 8000;

//route
app.get("/", (req, res) => {
	res.send("from local host");
});

app.use("/.netlify/functions/server/user", userRoute);
app.use("/.netlify/functions/server/products", newProduct);
app.use("/.netlify/functions/server/payment", paymentRoute);

// listen to server
app.listen(PORT, () => {
	console.log("Server is running at : ", PORT);
});


module.exports.handler = serverless(app);
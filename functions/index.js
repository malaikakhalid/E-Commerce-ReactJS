const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")('sk_test_51Hehn2B8kurbufNPK22x7AjBSRraSlapG6H6pmgwA7UDrJVPA0yYlZ3x01DDFKXpNflY1jLI3PhArll5nsWE6XAt00KHniPZUq')

// API

// App COnfig
const app = express();


// Middleware
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async(request,response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen Command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/store-1fe3d/us-central1/api
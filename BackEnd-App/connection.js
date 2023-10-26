
const mongoose = require("mongoose");

// Required fields for a successful connection
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const uri = `mongodb+srv://mehdi:mehdi@cluster0.v0f69ng.mongodb.net/?retryWrites=true&w=majority`
const connexion = mongoose
    .connect(uri, connectionParams)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

module.exports = connexion;

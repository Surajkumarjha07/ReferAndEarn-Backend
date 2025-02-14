const express = require("express");
require("dotenv").config();
const refer = require("./routes/refer");
const cors = require("cors");

const corsOptions = {
    origin: "https://referandearn-frontend.onrender.com",
    credentials: true
}

const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, Mr. Wayne!");
})

app.use("/refer", refer);

app.listen(process.env.PORT || 8000, () => {
    console.log("server is running");
})
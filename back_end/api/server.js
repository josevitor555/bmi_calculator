import express from 'express';

// Import a Middleware function
import cors from 'cors';

// Import Dotenv
import dotenv from 'dotenv';
dotenv.config();

// Import database
import { db } from "./connect.js";

// Import data from JSON for Test
// import { data } from "../../imc_calculator/src/data/data.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));

app.get("/", function(req, res) {
    res.send("Hello from server!");
});

// Create a Endpoint Route from BMI Information (MongoDB)
app.get("/bmi-data", async (req, res) => {
    try {
        const data = await db.collection("bmi_table").find().toArray();
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

// Return data from JSON (Test) - OK
// app.get("/bmi-data", (req, res) => {
//     res.status(200).json(data);
// });

// Server listening on Default Port
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port!`);
});
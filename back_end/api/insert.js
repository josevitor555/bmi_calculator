// Import database

import { db } from "./connect.js";
import { data } from "../../imc_calculator/src/data/data.js"

async function insertdata() {
    try {
        const count = await db.collection("bmi_table").countDocuments();

        if (count === 0) {
            const result = await db.collection("bmi_table").insertMany(data);
            console.log(`Inserted Data: ${result.insertedCount} documents `);
        } else {
            console.log("Data already exists, skipping insertion.");
            return {
                success: false,
                message: "Data already exists"
            }
        }
    } catch (error) {
        console.error(`Error inserting data: ${error}`);
        return {
            success: false,
            message: "Error inserting data",
            error: error.message
        }
    }
}

const dataResponse = insertdata();
console.log(dataResponse);

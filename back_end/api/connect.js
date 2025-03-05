import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();

const STRING_URL = process.env.STRING_URL;
const client = new MongoClient(STRING_URL);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        return client.db('bmidatabase');
    } catch (error) {
        console.error(`Error to connect database: ${error}`);
        process.exit(1);
    }
}

export const db = await connectDB();

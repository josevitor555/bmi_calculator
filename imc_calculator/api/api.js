import axios from "axios";

const URL = "http://localhost:3001";

// Get request from axios - Return a promise.
export const fecthDataTable = async () => {
    try {
        const response = await axios.get(`${URL}/bmi-data`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

// const responseData = await axios.get(`${URL}/bmi-data`);
// export const responseDataTable = responseData.data;

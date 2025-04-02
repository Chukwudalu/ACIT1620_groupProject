import axios from "axios"
// Get customer
const getCustomer  = async (username) => {
    // endpoint for customers is '/customer'
    try {
        res = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/customer`, data={username})
        return res
    } catch (error) {
        console.log(error)
    }
}

export default getCustomer

// Get 
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '54ccfffbdd6a4c07bb41b9d67d979fe2'
    }
})
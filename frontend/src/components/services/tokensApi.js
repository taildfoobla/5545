import axios from "axios";

const tokensApi = axios.create({
    baseURL:"http://localhost:5000"
})

export const getTokens = async(url)=>{
    const response = await tokensApi.get(url)
    return response.data
}

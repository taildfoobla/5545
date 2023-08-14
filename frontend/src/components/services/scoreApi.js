import axios from "axios";

const scoreApi = axios.create({
    baseURL:"http://localhost:5000"
})

export const getScore = async(url)=>{
    const response = await scoreApi.get(url)
    return response.data
}

import axios from "axios";
const BASE_URL = "https://api-beta.melobit.com/v1/"


const getAxiosInstance = axios.create({
    baseURL: BASE_URL,
});


export{
    getAxiosInstance
}

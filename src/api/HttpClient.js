import axios from "axios";
const  baseURL = "https://api-beta.melobit.com/v1/";

const getAxiosInstance = axios.create({
    baseURL: baseURL,
});


export{
    getAxiosInstance
};

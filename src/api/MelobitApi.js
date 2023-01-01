import { getAxiosInstance } from "./HttpClient";

const getLatestSliders = () => getAxiosInstance.get('/song/slider/latest');
const getLatestSong = () => getAxiosInstance.get("/song/new/0/11");

export {
    getLatestSliders,
    getLatestSong
};

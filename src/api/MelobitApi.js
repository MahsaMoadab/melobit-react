import { getAxiosInstance } from "./HttpClient";

const getLatestSliders = () => getAxiosInstance.get('/song/slider/latest');
const getLatestSong = (start,end) => getAxiosInstance.get(`/song/new/${start}/${end}`);
const getTopDaySong = (start,end) => getAxiosInstance.get(`/song/top/day/${start}/${end}`);
const getTopWeekSong = (start,end) => getAxiosInstance.get(`/song/top/week/${start}/${end}`);
const getTrendingArtist = (start,end) => getAxiosInstance.get(`/artist/trending/${start}/${end}`);
const getSongDetails = (songId) => getAxiosInstance.get(`/song/${songId}`);
const getSearchArtistOrSong = (query) => getAxiosInstance.get(`/search/query/${query}/0/10`);
const getArtistAlbum = (query) => getAxiosInstance.get(`artist/albums/${query}/0/50`);

export {
    getLatestSliders,
    getLatestSong,
    getTopDaySong,
    getTopWeekSong,
    getTrendingArtist,
    getSongDetails,
    getSearchArtistOrSong,
    getArtistAlbum
};

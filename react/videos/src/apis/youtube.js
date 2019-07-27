import axios from 'axios';

const KEY = 'AIzaSyB4jEsV9WN9ApYk2a2oTvYJ1IGTy69rtzA';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});
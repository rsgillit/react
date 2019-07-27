import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 96d299cde54034551afbc4dff7f0ce3655027a9da0ec0ce994f377f61267ba27'
    }
});
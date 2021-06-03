import axios from 'axios';


export const fetchImages = async (start: number) => {
    const endpoint = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=20`;
    const fetchImagesResponse = await axios.get(endpoint);
    return fetchImagesResponse?.data?.length ? fetchImagesResponse.data : []
}


export const fetchLatestNews = async () => {
    const endpoint = `https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5`;
    const fetchNewsResponse = await axios.get(endpoint);
    return fetchNewsResponse?.data?.length ? fetchNewsResponse.data : []
}
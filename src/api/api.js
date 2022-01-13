import axios from "axios";

const url = "http://localhost:3500/posts";

export const getPosts = async () => {
    const response = await axios.get(url);
    return response.data;
};



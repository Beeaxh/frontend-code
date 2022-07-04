import axios from "axios";
export const BaseFile = axios.create({
    baseURL:"https://test-beeaxh.herokuapp.com/"
})
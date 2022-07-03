import axios from "axios";
export const BaseFile = axios.create({
    baseURL:"https://beeaxh.herokuapp.com/"
})
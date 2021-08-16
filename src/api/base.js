import axios from "axios";


const baseURL = "https://content.guardianapis.com";

export const instance = axios.create({
    baseURL
  });

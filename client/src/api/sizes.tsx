import axios from "axios";
import { TMBD_API_URL } from "../const";

export const getAllSizes = () => {
  return axios.get(`${TMBD_API_URL}/size/all`);
};

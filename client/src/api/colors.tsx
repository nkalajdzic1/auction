import axios from "axios";
import { TMBD_API_URL } from "../const";

export const getAllColors = () => {
  return axios.get(`${TMBD_API_URL}/color/all`);
};

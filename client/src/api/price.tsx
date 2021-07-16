import axios from "axios";
import { TMBD_API_URL } from "../const";

export const getMinMaxPrice = () => {
  return axios.get(`${TMBD_API_URL}/price/max_min_price`);
};

import axios from "axios";
import { TMBD_API_URL } from "../const";

export const getParentCategories = () => {
  return axios.get(`${TMBD_API_URL}/category/parent_categories`);
};

export const getAllCategories = () => {
  return axios.get(`${TMBD_API_URL}/category/categories`);
};

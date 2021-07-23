import axios from "./interceptors";
import apiClient from "./interceptors";
import { TMBD_API_URL } from "../const";

axios.defaults.withCredentials = true;

export interface IUserThirdParty {
  name: string;
  tokenId: string;
}

export interface IUserFacebook {
  first_name: string;
  last_name: string;
  tokenId: string;
}

export const refreshAccessToken = () => {
  return axios.post(`${TMBD_API_URL}/auth/refresh_access_token`);
};

export const logoutUser = () => {
  return axios.get(`${TMBD_API_URL}/auth/logout`, { withCredentials: true });
};

export const getUserViaThirdParty = (user: IUserThirdParty) => {
  return axios.post(`${TMBD_API_URL}/auth/third_party_auth`, user, {
    withCredentials: true,
  });
};

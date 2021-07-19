import axios from "axios";
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

export const getUserViaThirdParty = (user: IUserThirdParty) => {
  return axios.post(`${TMBD_API_URL}/auth/third_party_auth`, user, {
    withCredentials: true,
  });
};

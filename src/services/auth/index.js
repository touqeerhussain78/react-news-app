import { notification, removeAccessToken } from "../../utils/helpers";
import { API } from "../config/axios.config";

export const registerAccount = async (data) =>
  API({
    method: "PUT",
    url: `/auth/register`,
    data,
  });

export const login = async (data) =>
  API({
    method: "POST",
    url: `/auth/login`,
    data,
  });

export const getMe = async () =>
  API({
    method: "GET",
    url: "/auth/me",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

  export const logout = async ()=> {
    try { 
        removeAccessToken();
        notification('logout successfully');
        setTimeout(()=> window.location.reload(),2000);
        // return data;
    } catch (error) {
        notification(error.response.data.message,'error');
        console.log(error);
    }
};


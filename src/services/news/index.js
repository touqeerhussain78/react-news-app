import { API } from "../config/axios.config";

export const news = async (data) =>
  API({
    method: "GET",
    url: `/new/articles?type=`+data,
  });

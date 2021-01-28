import apiAxios from "../borrowApiInstance";
import api from "../api";
import { useQuery } from "react-query";

const getBrands = async () => {
  return await api.get("brands", apiAxios);
};
const getBrand = async ({ id }) => {
  return await api.get(`brands/${id}`, apiAxios);
};
export const useBrands = () => useQuery("brands", getBrands);
export const useBrand = (id) => useQuery(["brand", id], getBrand);

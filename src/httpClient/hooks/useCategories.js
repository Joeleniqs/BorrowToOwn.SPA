import apiAxios from "../borrowApiInstance";
import api from "../api";
import { useQuery } from "react-query";

const getCategories = async () => await api.get("categories", apiAxios);

const getCategory = async (_, id) => {
  return await api.get(`products/${id}?includeSubCategory=true`, apiAxios);
};

export const useCategories = () => useQuery("categories", getCategories);
export const useCategory = (id) => useQuery(["categories", id], getCategory);

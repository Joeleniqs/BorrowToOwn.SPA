import React, { useState } from "react";
import apiAxios from "../borrowApiInstance";
import api from "../api";
import { useQuery } from "react-query";

const getProducts = async () => {
  console.log("fetching ....");
  return await api.get("products", apiAxios);
};
const getProduct = async ({ id }) => {
  return await api.get(`products/${id}`, apiAxios);
};
export const useProducts = () => useQuery("products", getProducts);
export const useProduct = (id) => useQuery(["product", id], getProduct);

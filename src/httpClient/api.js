import React from "react";
import axios from "axios";
import { message } from "antd";

const apiFetch = (url, requestConfig, axiosInstance = null, headers = []) => {
  const api = axiosInstance || axios;
  try {
    return api({
      url,
      ...requestConfig,
      ...headers,
    });
  } catch (error) {
    message.error("something went wrong ... contact Admin");
  }
};

const get = async (url, axiosInstance = null) =>
  apiFetch(url, null, axiosInstance);

const options = async (url, axiosInstance = null) =>
  apiFetch(url, { method: "OPTIONS" }, (axiosInstance = null));

const del = async (url, axiosInstance = null) =>
  apiFetch(url, { method: "DELETE" }, (axiosInstance = null));

const post = async (url, body, axiosInstance = null) =>
  apiFetch(
    url,
    { method: "POST", body: JSON.stringify(body) },
    (axiosInstance = null)
  );

const put = async (url, body, axiosInstance = null) =>
  apiFetch(url, { method: "PUT", body: JSON.stringify(body) }, axiosInstance);

export default {
  get,
  options,
  post,
  put,
  del,
  post,
};

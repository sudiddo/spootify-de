import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import config from "../config";
import qs from "qs";

const { authUrl, clientId, clientSecret } = config.api;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: clientId,
    password: clientSecret,
  },
};
const data = {
  grant_type: "client_credentials",
};

export const getAuth = createAsyncThunk("app/getAuth", async (_) => {
  const response = await Axios.post(authUrl, qs.stringify(data), headers)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
});

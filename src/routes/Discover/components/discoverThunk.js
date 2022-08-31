import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import config from "../../../config";

const { baseUrl } = config.api;

export const getNewRelease = createAsyncThunk(
  "discover/getNewReleases",
  async (token, thunkApi) => {
    if (token) {
      const response = await Axios.get(`${baseUrl}/browse/new-releases`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          return result.data;
        })
        .catch((error) => {
          return error;
        });

      if (!response.albums) {
        return thunkApi.rejectWithValue("Api error");
      }
      return response;
    } else {
      return thunkApi.rejectWithValue("No token");
    }
  }
);

export const getFeaturedPlaylists = createAsyncThunk(
  "discover/getFeaturedPlaylists",
  async (token, thunkApi) => {
    if (token) {
      const response = await Axios.get(`${baseUrl}/browse/featured-playlists`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          return result.data;
        })
        .catch((error) => {
          return error;
        });

      if (response.playlists.items[0] === null) {
        return thunkApi.rejectWithValue("Api error");
      }
      return response;
    } else {
      return thunkApi.rejectWithValue("No token");
    }
  }
);

export const getCategories = createAsyncThunk(
  "discover/getCategories",
  async (token, thunkApi) => {
    if (token) {
      const response = await Axios.get(`${baseUrl}/browse/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          return result.data;
        })
        .catch((error) => {
          return error;
        });
      if (!response.categories) {
        return thunkApi.rejectWithValue("Api error");
      }
      return response;
    } else {
      return thunkApi.rejectWithValue("No token");
    }
  }
);

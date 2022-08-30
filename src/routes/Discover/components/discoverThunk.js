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
          return result.data.albums.items || [];
        })
        .catch((error) => {
          return error;
        });
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
          return result.data.playlists.items || [];
        })
        .catch((error) => {
          console.log("error", error);
          return error;
        });
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
          return result.data.categories.items || [];
        })
        .catch((error) => {
          return error;
        });
      return response;
    } else {
      return thunkApi.rejectWithValue("No token");
    }
  }
);

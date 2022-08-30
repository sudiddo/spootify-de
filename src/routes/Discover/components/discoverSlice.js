import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getFeaturedPlaylists,
  getNewRelease,
} from "./discoverThunk";

export const initialState = {
  newReleaseLoading: true,
  newReleases: [],
  featuredPlaylistsLoading: true,
  featuredPlaylists: [],
  categoriesLoading: true,
  categories: [],
};

export const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // New Releases
    builder.addCase(getNewRelease.pending, (state) => {
      state.newReleaseLoading = true;
    });
    builder.addCase(getNewRelease.fulfilled, (state, action) => {
      state.newReleaseLoading = false;
      state.newReleases = action.payload;
    });
    builder.addCase(getNewRelease.rejected, (state, action) => {
      state.newReleaseLoading = false;
    });

    // Featured Playlists
    builder.addCase(getFeaturedPlaylists.pending, (state) => {
      state.featuredPlaylistsLoading = true;
    });
    builder.addCase(getFeaturedPlaylists.fulfilled, (state, action) => {
      state.featuredPlaylistsLoading = false;
      state.featuredPlaylists = action.payload;
    });
    builder.addCase(getFeaturedPlaylists.rejected, (state, action) => {
      state.featuredPlaylistsLoading = false;
    });

    // Categories
    builder.addCase(getCategories.pending, (state) => {
      state.categoriesLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.categoriesLoading = false;
    });
  },
});

export const discoverSelector = (state) => state.discover;

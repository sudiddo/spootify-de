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
      const { albums } = action.payload;
      const { items } = albums;
      state.newReleaseLoading = false;
      state.newReleases = items || [];
    });
    builder.addCase(getNewRelease.rejected, (state, action) => {
      state.newReleaseLoading = false;
      state.newReleases = [];
    });

    // Featured Playlists
    builder.addCase(getFeaturedPlaylists.pending, (state) => {
      state.featuredPlaylistsLoading = true;
    });
    builder.addCase(getFeaturedPlaylists.fulfilled, (state, action) => {
      const { playlists } = action.payload;
      const { items } = playlists;
      state.featuredPlaylistsLoading = false;
      state.featuredPlaylists = items || [];
    });
    builder.addCase(getFeaturedPlaylists.rejected, (state, action) => {
      state.featuredPlaylistsLoading = false;
      state.featuredPlaylists = [];
    });

    // Categories
    builder.addCase(getCategories.pending, (state) => {
      state.categoriesLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      const { categories } = action.payload;
      const { items } = categories;
      state.categoriesLoading = false;
      state.categories = items || [];
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.categoriesLoading = false;
      state.categories = [];
    });
  },
});

export const discoverSelector = (state) => state.discover;

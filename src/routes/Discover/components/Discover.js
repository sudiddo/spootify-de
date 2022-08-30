import React, { useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getFeaturedPlaylists,
  getNewRelease,
} from "./discoverThunk";
import { discoverSelector } from "./discoverSlice";
import { appSelector } from "../../../app/appSlice";

const Discover = () => {
  const {
    newReleases,
    newReleaseLoading,
    featuredPlaylists,
    featuredPlaylistsLoading,
    categories,
    categoriesLoading,
  } = useSelector(discoverSelector);
  const { token } = useSelector(appSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewRelease(token));
    dispatch(getFeaturedPlaylists(token));
    dispatch(getCategories(token));
  }, [dispatch, token]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
        isLoading={newReleaseLoading}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylists}
        isLoading={featuredPlaylistsLoading}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
        isLoading={categoriesLoading}
      />
    </div>
  );
};

export default Discover;

import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "../app/appSlice";
import { discoverSlice } from "../routes/Discover/components/discoverSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  discover: discoverSlice.reducer,
});

export default rootReducer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../common/components/LoadingIndicator";
import Routes from "../routes";
import { appSelector } from "./appSlice";
import { getAuth } from "./appThunk";
import "./_app.scss";

function App() {
  const dispatch = useDispatch();
  const { appLoading } = useSelector(appSelector);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return appLoading ? (
    <div className="loading-container">
      <LoadingIndicator />
    </div>
  ) : (
    <Routes />
  );
}

export default App;

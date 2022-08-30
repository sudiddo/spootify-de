import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../common/components/Modal";
import Routes from "../routes";
import { setAccessToken } from "./appSlice";

function App() {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    dispatch(setAccessToken(token));
  }, [dispatch]);

  return (
    <>
      {!token && <Modal />}
      <Routes />
    </>
  );
}

export default App;

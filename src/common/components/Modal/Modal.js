import React from "react";
import ReactModal from "react-modal";
import config from "../../../config";

import "./_modal.scss";

function Modal() {
  const { authUrl, clientId } = config.api;
  const redirectURI = "http://localhost:3000";
  const responseType = "token";
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const onLogin = () => {
    window.open(
      `${authUrl}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`,
      "_self"
    );
  };

  return (
    <ReactModal
      ariaHideApp={false}
      style={customStyles}
      isOpen
      shouldCloseOnOverlayClick={false}
    >
      <div className="content">
        <p className="title">Hi! You need to login to access Spootify!</p>
        <button onClick={onLogin} className="button">
          Login
        </button>
      </div>
    </ReactModal>
  );
}

export default Modal;

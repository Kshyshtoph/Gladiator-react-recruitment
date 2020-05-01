import React from "react";

const Footer = ({ callToActionLabel, toggle }) => {
  return (
    <footer className="modal__footer">
      <button className="modal__btn" onClick={toggle}>
        cancel
      </button>
      <button
        className="modal__btn"
        onClick={() => {
          toggle();
          alert("ok");
        }}
      >
        {callToActionLabel}
      </button>
    </footer>
  );
};
export default Footer;

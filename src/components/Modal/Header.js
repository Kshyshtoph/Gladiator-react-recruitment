import React from "react";

const Header = ({ title, toggle }) => {
  return (
    <header className="modal__header">
      <h2>{title}</h2>
      <button className="modal__btn--closing modal__btn" onClick={toggle}>
        x
      </button>
    </header>
  );
};
export default Header;

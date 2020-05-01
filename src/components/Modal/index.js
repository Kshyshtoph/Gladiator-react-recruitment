import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./style.css";

class Modal extends React.Component {
  static Header = Header;
  static Footer = Footer;
  static Content = Content;
  state = {
    isOpen: true,
  };
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        toggle: this.toggle,
      });
    });
    return (
      this.state.isOpen && (
        <>
          <div className="modal__bg" onClick={this.toggle} />
          <div className="modal">{children}</div>
        </>
      )
    );
  }
}

export default Modal;

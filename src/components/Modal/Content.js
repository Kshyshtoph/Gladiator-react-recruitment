import React from "react";

class Content extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child)
    );
    return <div className="modal__content">{children}</div>;
  }
}
export default Content;

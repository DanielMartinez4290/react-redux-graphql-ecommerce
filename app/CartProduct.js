import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class CartProduct extends React.Component {
  render() {
    return (
      <div className="cartProduct">
        <div className="productName">{this.props.item.name}</div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <CartProduct {...props} />
    </ErrorBoundary>
  );
}

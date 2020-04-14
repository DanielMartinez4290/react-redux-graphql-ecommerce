import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";

class CartProduct extends React.Component {
  render() {
    return (
      <div className="cartProduct">
        <div className="productImg"><Img url={this.props.item.url} /> </div>
        <div className="productInfo">
          <div className="productName">{this.props.item.name}</div>
          <div className="productPrice">${this.props.item.price.toFixed(2)}</div>
        </div>
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

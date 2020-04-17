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
          <div>
            <span className="productPrice">${this.props.item.price.toFixed(2)}</span>
            <span className="cartBtns">
              <button type="button" className="btn btn-default btn-sm qtyBtn">
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            </span>
            <span className="cartBtns productQty">1</span>
            <span className="cartBtns">
              <button type="button" className="btn btn-default btn-sm qtyBtn cartBtns">
                <span className="glyphicon glyphicon-minus"></span>
              </button>
            </span>
          </div>
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

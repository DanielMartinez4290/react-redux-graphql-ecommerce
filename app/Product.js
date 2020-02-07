import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";
import { Link } from "@reach/router";

class Product extends React.Component {

  render() {
    return (
        <div className="product">
          <Link to={"/products/" + this.props.item.id}>
          <Img url={this.props.item.url} />
          <div className="productName">{this.props.item.name}</div>
          <div className="productPrice">Price: ${ this.props.item.price.toFixed(2) }</div>
          </Link>
        </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Product {...props} />
    </ErrorBoundary>
  );
}

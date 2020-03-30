import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";
import { Link } from "@reach/router";
import ProductPage from "./ProductPage";
import { Router } from "@reach/router";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState({isHovering:true});
  }
  handleMouseLeave() {
    this.setState({isHovering:false});
  }

  render() {
    return (
        <div 
          className="product" 
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave} 
        >
          <div> 
              <Img url={this.props.item.url} />
              <div className="productName">{this.props.item.name}</div>
              <div className="productPrice">Price: ${ this.props.item.price.toFixed(2) }</div>
              { this.state.isHovering &&
                  <div className="hoverProduct">
                  <Link to={"/products/" + this.props.item.id}><button>View Gallery</button><br/></Link>
                    <button>Add to Cart</button>
                  </div>
              }
          </div>
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

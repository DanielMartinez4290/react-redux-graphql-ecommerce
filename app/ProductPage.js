import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import CategoryProduct from "./CategoryProduct";
import configuration from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GetProduct, GetProductByName } from './graphql';
import Img from "./Img";
import { Router, Link } from "@reach/router";

Amplify.configure({...configuration});

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productData:{}}
  }

  componentDidMount() {
    console.log("called again");
    API.graphql(graphqlOperation(GetProduct,
      { id: this.props.id }
    ))
    .then(response => {
      this.setState({productData: response.data.getGuitar});
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="page productPage">
        <div className="colTwo">
          <Img url={this.state.productData.url} />
        </div>
        <div className="colTwo">
          <div>
            <div className="productHeader">Name:</div>
            <div className="productData">{this.state.productData.name}</div>
            <br/><br/>
          </div>
          <div>
            <div className="productHeader">Price:</div> 
            <div className="productData">${this.state.productData.price}</div>
            <br/><br/>
          </div>
          <div>
            <div className="productHeader">Category:</div>
            <div className="productData"> {this.state.productData.category}</div>
            <br/><br/>
          </div>
          <div>
            <div className="productHeader">Description:</div>
            <div className="productData"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <br/><br/>
          </div>
        </div>
        <div className="colOne">
        <Router primary={false}>
            <ProductPage path="products/:id" />
         </Router>

         <CategoryProduct></CategoryProduct>
            
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ProductPage {...props} />
    </ErrorBoundary>
  );
}

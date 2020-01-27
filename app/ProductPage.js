import React from "react";
import ErrorBoundary from "./ErrorBoundary";

import configuration from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GetProduct } from './graphql';
import Img from "./Img";

Amplify.configure({...configuration});

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productData:{}}
  }

  componentDidMount() {
    API.graphql(graphqlOperation(GetProduct))
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
          <div className="productName">Name: {this.state.productData.name}</div>
          <div className="productName">Price: {this.state.productData.price}</div>
          <div className="productName">Category: {this.state.productData.category}</div>
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

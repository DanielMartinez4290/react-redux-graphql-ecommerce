import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { CreateProduct } from './graphql';
import NewProduct from "./NewProduct";

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loading:false}
  }

  addProduct = product => {
      API.graphql(graphqlOperation(CreateProduct, product)).then(response => {
        const newProduct = response.data.createGuitar;
      });
      this.setState({loading: true});
      //this.setState({products: [newProduct, ...this.state.products]});
  };

  removeProduct = product => {
      this.setState({
        products: this.state.products.filter(other => other.id !== product.id),
      });
  };
    
  render() {
    return (
      <div className="page addProduct">
        <div>{ this.state.loading ? 'Added' : '' }</div>
        <div className="h2">Add Product</div>
        <NewProduct onSubmit={this.addProduct} />
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <AddProduct {...props} />
    </ErrorBoundary>
  );
}

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { API, graphqlOperation } from 'aws-amplify';
import { ListGuitarsByCategory } from './graphql';
import Product from "./Product"; 

class CategoryProduct extends React.Component {

  constructor(props) {
     super(props);
     this.state = { 
       productData:[ {id: '', url: '', name: '', price: 24.00} ] 
     }
  }

  componentDidMount() {
    API.graphql(graphqlOperation(ListGuitarsByCategory))
    .then(response => {
        this.setState({productData: response.data.listGuitars.items});
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="categoryProduct">
        <h3>Fender Guitars:</h3>
          { this.state.productData.map((item, i) => (
            <Product key={i} item={item} />
          ))} 
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <CategoryProduct {...props} />
    </ErrorBoundary>
  );
}

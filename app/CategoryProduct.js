import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListGuitars } from './graphql';

class CategoryProduct extends React.Component {

  constructor(props) {
     super(props);
     this.state = {productData:{}}
  }

  componentDidMount() {
    API.graphql(graphqlOperation(ListGuitars))
    .then(response => {
        this.setState({productData: response.data.listGuitars.items});
    })
    .catch(console.error);
   }

  render() {
    return (
      <div className="categoryProduct">
          
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

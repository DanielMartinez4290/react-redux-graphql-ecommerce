import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class ProductPage extends React.Component {
  //state = { loading: true, showModal: false };

  componentDidMount() {

  }
  render() {

    return (
      <div className="page">
        product page content
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

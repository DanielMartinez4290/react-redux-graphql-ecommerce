import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class Page extends React.Component {
  //state = { loading: true, showModal: false };

  componentDidMount() {

  }
  render() {

    return (
      <div className="page">
        
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}

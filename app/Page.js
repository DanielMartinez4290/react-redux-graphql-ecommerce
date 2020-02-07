import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class Page extends React.Component {
  render() {

    return (
      <div className="page">
        page content  
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

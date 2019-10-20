import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class SortHeader extends React.Component {
  render() {

    return (
      <div
      >
        working
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <SortHeader {...props} />
    </ErrorBoundary>
  );
}

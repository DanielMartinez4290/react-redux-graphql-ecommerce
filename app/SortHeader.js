import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class SortHeader extends React.Component {
  render() {
    const {sortLow, sortHigh} = this.props;

    return (
      <div className="sortHeader">
        <span onClick={sortLow}>Low</span>
        <span onClick={sortHigh}>High</span>
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

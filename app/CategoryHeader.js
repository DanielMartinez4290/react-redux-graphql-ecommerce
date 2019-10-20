import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class CategoryHeader extends React.Component {
  render() {
    const {category, name} = this.props;

    return (
      <div 
      className="categoryHeader"
      onClick={category}
      >
        {name}
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <CategoryHeader {...props} />
    </ErrorBoundary>
  );
}

import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class Img extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="img">
          <img src={this.props.url} />
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Img {...props} />
    </ErrorBoundary>
  );
}

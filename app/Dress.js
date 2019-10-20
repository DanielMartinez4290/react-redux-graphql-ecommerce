import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";

class Dress extends React.Component {
  componentDidMount() {
    console.log("passed in url is " + this.props.item.url);
  }

  render() {

    return (
      <div className="dress">
        <Img url={this.props.item.url} />
        <div>{this.props.item.name}</div>
        <div>
          Price: ${this.props.item.price}
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Dress {...props} />
    </ErrorBoundary>
  );
}

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "@reach/router";

class NavItem extends React.Component {
  //state = { loading: true, showModal: false };
  componentDidMount() {

  }
  
  render() {
    const { title, url, children } = this.props.item;

    return (
      <li className="navItem">
          <Link to={title}>{title}</Link>
      </li>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <NavItem {...props} />
    </ErrorBoundary>
  );
}

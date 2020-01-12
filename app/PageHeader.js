import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import menuItems from "./menuitems";
import NavItem from "./NavItem";

class PageHeader extends React.Component {
  //state = { loading: true, showModal: false };
  componentDidMount() {
    
  }

  render() {

    return (
      <div className="header">
        <div className="nav">
          <ul>
            {menuItems.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}  
          </ul>
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PageHeader {...props} />
    </ErrorBoundary>
  );
}

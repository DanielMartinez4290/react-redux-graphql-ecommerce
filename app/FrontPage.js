import React, { Fragment } from "react";
import ErrorBoundary from "./ErrorBoundary";
import CategoryHeader from "./CategoryHeader";
import SortHeader from "./SortHeader";
import Product from "./Product"; 

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: this.props.products};
  }

  componentDidMount() {
    this.props.allCategory;
  }

  render() {
    return (
      <Fragment>
          <div className="frontPage">
            <div className="tagLine" data-testid="app-title">
                Music Store 
            </div>
            <div className="categories">
              <CategoryHeader category={this.props.allCategory} name="ALL" />
              <CategoryHeader category={this.props.gibsonCategory} name="GIBSON" />
              <CategoryHeader category={this.props.fenderCategory} name="FENDER" />
            </div>
            <SortHeader 
               sortLow={this.props.sortLow} 
               sortHigh={this.props.sortHigh} 
               allCategory={this.props.allCategory} 
            />
            <div className="firstRow"> 
              { this.props.products.map((item, i) => (
                  <Product 
                    key={i} 
                    item={item} 
                    addToCart={this.props.addToCart} 
                  />
              )) }  
            </div>
          </div>
      </Fragment>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <FrontPage {...props} />
    </ErrorBoundary>
  );
}

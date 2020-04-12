import React, { Fragment } from "react";
import ErrorBoundary from "./ErrorBoundary";
import CategoryHeader from "./CategoryHeader";
import SortHeader from "./SortHeader";
import Product from "./Product"; 

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products:[]}
  }

  componentDidMount() {
    const {allCategory} = this.props;
    allCategory;    
  }

  render() {
    const {addToCart, products, allCategory ,gibsonCategory, fenderCategory, sortLow, sortHigh} = this.props;

    return (
      <Fragment>
          <div className="frontPage">
            <div className="tagLine">
                Music Store 
            </div>
            <div className="categories">
              <CategoryHeader category={allCategory} name="ALL" />
              <CategoryHeader category={gibsonCategory} name="GIBSON" />
              <CategoryHeader category={fenderCategory} name="FENDER" />
            </div>
            <SortHeader sortLow={sortLow} sortHigh={sortHigh} allCategory={allCategory}></SortHeader>
            <div className="firstRow"> 
              { products.map((item, i) => (
                  <Product key={i} item={item} addToCart={addToCart} />
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

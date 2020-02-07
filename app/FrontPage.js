import React, { Fragment } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";
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
    const {products, allCategory ,gibsonCategory, fenderCategory} = this.props;

    return (
      <Fragment>
          <div className="frontPage">
            <div className="tagLine">
                Guitar Store
            </div>
            <div className="categories">
              <CategoryHeader category={allCategory} name="ALL"></CategoryHeader>
              <CategoryHeader category={gibsonCategory} name="GIBSON"></CategoryHeader>
              <CategoryHeader category={fenderCategory} name="FENDER"></CategoryHeader>
            </div>
            <div className="firstRow"> 
              {/*<SortHeader></SortHeader> */}
              { products.map((item, i) => (
                  <Product key={i} item={item} />
              ))}  
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

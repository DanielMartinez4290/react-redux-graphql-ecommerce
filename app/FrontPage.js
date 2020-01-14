import React, { Fragment } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";
import HomeHeader from "./Img/HomeHeader.png";
import CategoryHeader from "./CategoryHeader";
import SortHeader from "./SortHeader";
import Dress from "./Dress"; 

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListProducts } from './graphql';

class FrontPage extends React.Component {

   componentDidMount() {
    
    API.graphql(graphqlOperation(ListProducts))
       .then(response => {
          console.log(response);
          const products = response.data.ListProducts;
          this.setState( products );
       })
       .catch(console.error);
       

    const {partyCategory} = this.props;
    partyCategory;
  }

  render() {
    const {dresses, allCategory ,dressCategory, partyCategory} = this.props;

    return (
      <Fragment>
          <div className="frontPage">
            <div className="homeCover">
               { /* <Img url={HomeHeader} /> */ }
            </div>
            <div className="tagLine">
                Guitar Store
            </div>
            <div className="categories">
              <CategoryHeader category={allCategory} name="ALL"></CategoryHeader>
              <CategoryHeader category={dressCategory} name="DRESSES"></CategoryHeader>
              <CategoryHeader category={partyCategory} name="PARTY"></CategoryHeader>
            </div>
            <div className="firstRow"> 
              {/*<SortHeader></SortHeader> */}
              { dresses.map((item, i) => (
                  <Dress key={i} item={item} />
              ))}  
            </div>
            <div className="press">
              Press
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

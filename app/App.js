import React, {Component} from "react";
import { Router } from "@reach/router";
import PageHeader from "./PageHeader";
import Page from "./Page";
import FrontPage from "./FrontPage";
import styled, { css } from "styled-components";
import ThemeContext from "./ThemeContext";
import ProductPage from "./ProductPage";
import AddProduct from "./AddProduct";
//import { withAuthenticator } from 'aws-amplify-react';

const styles = css`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    img {
        display: block;
        width: 100%;
    }
`;

const Container = styled.div`
    ${styles};
`;

class App extends Component {
  render() {
    return(
      <ThemeContext.Provider>
        <div className="wrapper">
          <header className="header">   
            <PageHeader cart = {this.props.cart} />
          </header>
          <article className="main">
            <Container>
              <Router>
                <FrontPage 
                  path="/" 
                  products = {this.props.products} 
                  allCategory   = {this.props.allCategory}
                  gibsonCategory = {this.props.gibsonCategory} 
                  fenderCategory = {this.props.fenderCategory}
                  sortLow = {this.props.sortLow}
                  sortHigh = {this.props.sortHigh}
                  addToCart = {this.props.addToCart}
                />
                <AddProduct path="/add" />
                <Page path="/:id"/>
                <ProductPage path="products/:id" />
              </Router>
            </Container>
          </article>
          <footer className="footer">
            <PageHeader cart = {this.props.cart} />
          </footer>
        </div>
      </ThemeContext.Provider>
    );
  };
}

//export default withAuthenticator(App);
export default App;
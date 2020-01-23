import React, {Component} from "react";
import { Router, Link } from "@reach/router";
import PageHeader from "./PageHeader";
import Page from "./Page";
import FrontPage from "./FrontPage";
import styled, { css } from "styled-components";
import ThemeContext from "./ThemeContext";
import ProductPage from "./ProductPage";
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
  constructor() {
    super();
    this.state = {
      results: this.props
    }
  }

  render() {
    const {count, dresses, dressCategory, partyCategory, allCategory, dispatch} = this.props;

    return(
      <ThemeContext.Provider>
        <div className="wrapper">
          <header className="header">   
            <PageHeader/>
          </header>
          <article className="main">
            <Container>
              <Router>
                <FrontPage 
                  path="/" 
                  dresses = {dresses} 
                  allCategory   = {allCategory}
                  dressCategory = {dressCategory} 
                  partyCategory = {partyCategory}
                />
                <Page path="/:id"/>
                <ProductPage path="products/:id" />
              </Router>
            </Container>
          </article>
          <footer className="footer">
            <PageHeader/>
          </footer>
        </div>
      </ThemeContext.Provider>
    );
  };
}

//export default withAuthenticator(App);
export default App;
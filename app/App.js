import React, {Component} from "react";
import { Router, Link } from "@reach/router";
import PageHeader from "./PageHeader";
import Page from "./Page";
import FrontPage from "./FrontPage";
import styled, { css } from "styled-components";
import ThemeContext from "./ThemeContext";

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
    const {count, dresses, lists, dressCategory, partyCategory, allCategory} = this.props;

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
              </Router>
            </Container>
          </article>
          <footer className="footer">Footer</footer>
        </div>
      </ThemeContext.Provider>
    );
  };
}

export default App;
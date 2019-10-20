import App from '../App';
import { connect } from "react-redux"

const ALL     = 'ALL'; 
const DRESSES = 'DRESSES'; 
const PARTY   = 'PARTY'; 

const allCategory = () => ({
  type: ALL
});

const dressCategory = () => ({
  type: DRESSES
});

const partyCategory = () => ({
  type: PARTY
});

const mapStateToProps = state => {
    return state;
};
   
const mapDispatchToProps = {
       allCategory,
       dressCategory,
       partyCategory
};
   
export default connect(
     mapStateToProps,
     mapDispatchToProps
)(App);
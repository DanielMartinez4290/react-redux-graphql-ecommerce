import App from '../App';
import { connect } from "react-redux"
import { allCategory, dressCategory, partyCategory } from '../actions/guitarActions';
import defaultState from '../default-state';

const mapStateToProps = state => {
  console.log(state);
    //return {dresses: defaultState.dresses,count:3};
    return state;
};
   
const actionCreators = {
       allCategory,
       dressCategory,
       partyCategory
};
   
export default connect(
     mapStateToProps,
     actionCreators
)(App);
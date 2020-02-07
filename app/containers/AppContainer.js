import App from '../App';
import { connect } from "react-redux"
import { allCategory, gibsonCategory, fenderCategory, sortLow, sortHigh } from '../actions/guitarActions';

const mapStateToProps = state => {
    return state;
};
   
const actionCreators = {
       allCategory,
       gibsonCategory,
       fenderCategory,
       sortLow,
       sortHigh
};
   
export default connect(
     mapStateToProps,
     actionCreators
)(App);
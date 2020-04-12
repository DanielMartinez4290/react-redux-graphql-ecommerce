import App from '../App';
import { connect } from "react-redux"
import { allCategory, gibsonCategory, fenderCategory, sortLow, sortHigh } from '../actions/guitarActions';
import { addToCart } from '../actions/cartActions';

const mapStateToProps = state => {
    return state;
};
   
const actionCreators = {
    allCategory,
    gibsonCategory,
    fenderCategory,
    sortLow,
    sortHigh,
    addToCart
};
   
export default connect(
     mapStateToProps,
     actionCreators
)(App);
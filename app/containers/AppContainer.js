import App from '../App';
import { connect } from "react-redux"
import { allCategory, gibsonCategory, fenderCategory, sortLow, sortHigh } from '../actions/guitarActions';
import { addToCart, showCartModal, hideCartModal } from '../actions/cartActions';

const mapStateToProps = state => {
    return state;
};
   
const actionCreators = {
    allCategory,
    gibsonCategory,
    fenderCategory,
    sortLow,
    sortHigh,
    addToCart,
    showCartModal,
    hideCartModal
};
   
export default connect(
     mapStateToProps,
     actionCreators
)(App);
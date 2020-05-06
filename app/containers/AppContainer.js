import App from '../App';
import { connect } from "react-redux"
import { ALL ,allCategory, gibsonCategory, fenderCategory, sortLow, sortHigh} from '../actions/guitarActions';
import { addToCart, showCartModal, hideCartModal } from '../actions/cartActions';
import { VisibilityFilters } from '../actions/visibilityActions';

const getVisibleProducts = (products, filter) => {
    switch (filter) {
      case ALL:
        return products
      case VisibilityFilters.SHOW_GIBSON:
        return products.filter(guitar => guitar.category === 'Gibson')
      case VisibilityFilters.SHOW_FENDER:
        return products.filter(guitar => guitar.category === 'Fender')
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

/*
const mapStateToProps = state => ({
    products: getVisibleProducts(state.products, state.visibilityFilter),
    cart: state.cart,
    visibilityFilter: state.visibilityFilter
});
*/

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
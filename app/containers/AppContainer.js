import App from '../App';
import { connect } from "react-redux"
import { allCategory, gibsonCategory, fenderCategory } from '../actions/guitarActions';

const mapStateToProps = state => {
    return state;
};
   
const actionCreators = {
       allCategory,
       gibsonCategory,
       fenderCategory
};
   
export default connect(
     mapStateToProps,
     actionCreators
)(App);
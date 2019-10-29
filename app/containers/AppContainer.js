import App from '../App';
import { connect } from "react-redux"
import { allCategory, dressCategory, partyCategory } from '../actions/guitarActions';

const mapStateToProps = state => {
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
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import menuItems from "./menuitems";
import NavItem from "./NavItem";
import Modal from "./Modal";
import CartModal from "./CartModal";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleToUpdate.bind(this);
  }

  handleToUpdate(someArg){
    this.setState({showModal:false});
  }

  componentDidUpdate(prevProps){
    if(this.props.showCart !== prevProps.showCart) {
      this.setState({showModal:this.props.showCart});
    }
  }
  
  toggleModal = () => this.setState({ showModal: !this.state.showModal }); 

  render() {
    var handleToUpdate  =   this.handleToUpdate;

    return (
      <div className="header">
        <div className="nav">
          <ul>
            {menuItems.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}
            <li onClick={this.props.showCartModal}>
              Cart <span class="glyphicon glyphicon-shopping-cart" />
            </li>  
          </ul>
        </div>
        {this.props.showCart ? (
          <Modal>
            <CartModal 
              handleToUpdate = {handleToUpdate.bind(this)} 
              cart = {this.props.cart}
              hideCartModal = {this.props.hideCartModal}
            />
          </Modal>
        ): null}
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PageHeader {...props} />
    </ErrorBoundary>
  );
}

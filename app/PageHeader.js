import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import menuItems from "./menuitems";
import NavItem from "./NavItem";
import Modal from "./Modal";
import CartModal from "./CartModal";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    var handleToUpdate  = this.handleToUpdate.bind(this);
  }

  handleToUpdate(someArg){
    this.setState({showModal:false});
  }

  state = {showModal: false}; 
  toggleModal = () => this.setState({ showModal: !this.state.showModal }); 

  render() {
    const {cart} = this.props;
    var handleToUpdate  =   this.handleToUpdate;

    const { showModal } = this.state; 

    return (
      <div className="header">
        <div className="nav">
          <ul>
            {menuItems.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}
            <li onClick={this.toggleModal}>
              Cart <span class="glyphicon glyphicon-shopping-cart"></span>
            </li>  
          </ul>
        </div>
        {showModal ? (
          <Modal>
            <CartModal 
              handleToUpdate = {handleToUpdate.bind(this)} 
              cart = {cart}
            >
            </CartModal>
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

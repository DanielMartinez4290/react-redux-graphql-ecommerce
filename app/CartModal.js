import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class CartModal extends React.Component {
  render() {
    var handleToUpdate  =   this.props.handleToUpdate;

    return (
      <div className="cartModal">
        <button 
            type="button" 
            class="close" 
            aria-label="Close" 
            onClick={() => handleToUpdate('someVar')}
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <h3>Your bag</h3>
        <p>You have no items in your bag</p>
        <button className="continueToCheckout">Continue to checkout</button>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <CartModal {...props} />
    </ErrorBoundary>
  );
}

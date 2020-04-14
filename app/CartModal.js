import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import CartProduct from "./CartProduct";

class CartModal extends React.Component {
  componentDidUpdate(prevProps) {
    console.log('asdfa',this.props.cart);
  }

  render() {
    var handleToUpdate  =   this.props.handleToUpdate;

    return (
      <div className="cartModal">
        <button 
            type="button" 
            class="close" 
            aria-label="Close" 
            onClick={this.props.hideCartModal}
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <h3>Your bag</h3>
        { this.props.cart.map((item, i) => (
            <CartProduct item={item} key = {i} />
        )) }
        { !this.props.cart.length ? (
          <p>You have no items in your bag</p>
        ): null}
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

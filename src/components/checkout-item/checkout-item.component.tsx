import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  clearCartItem,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

// styles
import './checkout-item.styles.scss';

// types
import { CartItem } from '../../types';
interface CheckoutItemProps extends CheckoutItemActions {
  item: CartItem;
}

interface CheckoutItemActions {
  addItem(item: CartItem): void;
  removeItem(item: CartItem): void;
  clearItem(item: CartItem): void;
}

const CheckoutItem = ({
  item,
  addItem,
  removeItem,
  clearItem
}: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): CheckoutItemActions => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
  clearItem: (item: CartItem) => dispatch(clearCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

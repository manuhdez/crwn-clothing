import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: StripeCheckoutButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mihnunKG4SVxwiXIJDQ2LH7D00oFoPe031';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment succesfull');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

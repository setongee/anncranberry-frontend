import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtom = ({price}) => {

    const stripePrice = price * 100;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!!!')
    }

    const publishKey = 'pk_test_51I0QutIEyfnddilNLeyj6xuZ7B2nTKMqO5B5HJkB2KnCFWkvy3iaqsPGp2ybU7wzNx5D9pnifX09gz91RgXMdpJ600xuapUvXR'

    return (
        <StripeCheckout

            label = 'Pay Now'
            name = 'Ann Cranberry'
            billingAddress
            shippingAddress
            image = 'https://anncranberry.com/img/ann-logo.png'
            description = {`your total price is N${price}`}
            amount = {stripePrice}
            token = {onToken}
            stripeKey = {publishKey}

        />
    )


}


export default StripeCheckoutButtom;
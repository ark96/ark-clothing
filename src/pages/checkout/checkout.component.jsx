import React from 'react';
import './checkout.style.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/check-out/checkout-item.component';
import CartItem from '../../components/cart-item/cart-item.component';

const CheckoutPage = ({cartItems, totalValue}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                (<CheckoutItem key={CartItem.id} cartItem={cartItem}/>)
                )
        }
        <div className='total'>
            <span>Total: ${totalValue}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalValue : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
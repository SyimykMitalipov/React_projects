import React from 'react';
import './cart-block.css'
import { BsCart } from 'react-icons/bs'
const CartBlock = () => {
    return (
        <div className='cart-block'>
            <BsCart size={25} className='cart-block__icon' />
            <span className='cart-block__total-price'>22000 сом</span>
        </div>
    );
}

export default CartBlock;

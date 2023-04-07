import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order summary: {cart.length}</h3>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? 
            <span className='green'>Aro kino</span>
             : <span>fokira</span>}
            {message}
            {
                cart.map(tShirt => <p
                    key={tShirt._id}
                >{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt._id)}>Remove</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
             {
                cart.length === 3 || <h3>Tinta to hoilo na!!!</h3>
            }

        </div>
    );
};

export default Cart;
/** 
 * CONDITIONAL RENDERING
 * 1 . use if or if else to set a variable that will contain an element, components
 * 2 . ternary operator: condition ? 'for true' : 'for false'
 * 3 . Logical &&: if the condition is true then the next thing will be displayed
 * 4 . Logical ||: if the condition is false then the next thing will be displayed
*/

/**
 * CONDITIONAL CSS CLASS 
 * 1 . use ternary
 * 2 . ternary inside template string
 * 
 * 
 * 
 */
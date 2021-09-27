import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)
    const { cart } = props;

    let total = 0;

    for (const doctor of cart) {

        total = total + doctor.fee;
    }



    return (
        <div className="cart">
            <h4>Added-Doctor:{props.cart.length}</h4>
            <br />
            <h5>Total fee:{total}</h5>
            <br />
            {
                cart.map((person) => {
                    return (
                        <div>
                            <ul>
                                <li>Name:{person.Name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;
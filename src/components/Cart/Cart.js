import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deletItemFromCart } from '../../redux/features/courseSlice';
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.courses.cart);

    const cartPrices = cartItems.map(item => item);

    const totalPrice = cartPrices.reduce((total, currenValue) => total = total + currenValue.price, 0);

    return (
        <div className='cart-container container'>
            {
                cartItems.length ? 
                <div className="cart table-responsive">
                    <h2>Your Orders</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Mentor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item => {
                                    return(
                                        <tr key={item.id}>
                                            <td>
                                                <h4>{item.courseName}</h4>
                                                <img src={item.image} className='img-fluid' alt="" />
                                            </td>
                                            <td><h4>{item.mentor}</h4></td>
                                            <td><h4>${item.price}</h4></td>
                                            <td><button onClick={() => dispatch(deletItemFromCart(item.id))} className='btn cancel-btn'>Cancel</button></td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>

                    <h2>CheckOut</h2>
                    <div className="checkout-container">
                        <div className="checkout-inner">
                            <p>Courses -</p>
                            <p>{cartItems.length}</p>
                        </div>
                        <div className="checkout-inner">
                            <p>Price -</p>
                            <p>${totalPrice}</p>
                        </div>
                        <button className='btn pay-btn'>Payment</button>
                    </div>
                </div>
                : 
                <div className='empty-cart-alert'>
                    <p>You don't have any order yet.</p>
                </div>
            }
        </div>
    );
};

export default Cart;
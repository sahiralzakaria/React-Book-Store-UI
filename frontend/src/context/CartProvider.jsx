
import { useState } from 'react';
import CartContext from './cartContext';

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    //ADD TO CART
    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item])
    }

    //REMOVE FROM CART
    const removeFromCart = (id) => {
        const cart = cartItems.filter((c) => c.id !== id)
        setCartItems(cart);
        console.log(cartItems);
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
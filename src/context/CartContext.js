import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([]);

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            console.log("se agrego", product)
            setCartListItems(cartListItems =>[...cartListItems, product])
        }
        
    }

    const deleteProduct = (product) => {
        setCartListItems(cartListItems.filter(cartItem => cartItem.id !== product.id));
       };

    const data = {
        cartListItems,
        addProductToCart,
        deleteProduct
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}
 
export {CartContext};
export default CartProvider;
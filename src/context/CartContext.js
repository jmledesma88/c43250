import { createContext, useState } from "react";

export const CartContext = createContext();


const emptyCart = [{
    item: "",
    qty: 0,
}];
console.log(emptyCart.length)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(emptyCart);

    return (<CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>)
}

// donde lo quiera usar necesito import useContext y ademas el import del context

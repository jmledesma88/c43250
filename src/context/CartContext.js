import { createContext, useState } from "react";
// import { Button, ButtonGroup } from "@mui/material";

export const CartContext = createContext();


const emptyCart = [];
const startQty = 0

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(emptyCart);
    const [totalQty, setTotalQty] = useState(startQty)

    // cart.forEach(item=>{
    // //     // totalPrice+= item.qty*item.price;
    //     totalQty = 0;
    //     totalQty+= item.qty;
    //     console.log(totalQty)
    // })

    return (<CartContext.Provider value={{ cart, setCart, totalQty, setTotalQty }}>
        {children}
    </CartContext.Provider>)
}


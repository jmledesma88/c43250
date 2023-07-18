import { createContext, useEffect, useState } from "react";
// import { Button, ButtonGroup } from "@mui/material";

export const CartContext = createContext();

const emptyCart = [];
const startQty = 0;

const cart0 = {
    id: "",
    qty: 0,
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(emptyCart);
    const [totalQty, setTotalQty] = useState(startQty);

    const [addToCart, setAddToCart] = useState(cart0);

    useEffect(()=>{
        console.log("updateCart actualizado");
        console.log(addToCart);

        // modificar para agregar al carrito

        // let alreadyInCart = cart.findIndex((i) => i.id === id);
        // // si el resultado del .findIndex es -1, entonces el Item no está en el carrito, entonces le hago un push
        // // si encuentro un índice, actualizo la cantidad de ese Item en el carrito
        // if (alreadyInCart === -1) {
        //     const prodToCart = {
        //         id: item.id,
        //         img: item.img,
        //         title: item.title,
        //         price: item.price,
        //         qty: qty,
        //     };
        //     setCart([...cart, prodToCart]);
        // } else {
        //     cart[alreadyInCart].qty = cart[alreadyInCart].qty + qty;
        //     // console.log(cart[alreadyInCart].qty)
        // }

    },[addToCart])



    // cart.forEach(item=>{
    // //     // totalPrice+= item.qty*item.price;
    //     totalQty = 0;
    //     totalQty+= item.qty;
    //     console.log(totalQty)
    // })

    return (
        <CartContext.Provider value={{ cart, setCart, totalQty, setTotalQty, setAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};

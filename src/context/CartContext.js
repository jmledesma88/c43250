import { createContext, useEffect, useState } from "react";
// import { Button, ButtonGroup } from "@mui/material";

export const CartContext = createContext();

const emptyCart = [];
const startQty = 0;

const cart0 = {
    id: "render",
    // img: "",
    // title: "",
    // price: 0,
    // qty: 0,
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(emptyCart);
    const [totalQty, setTotalQty] = useState(startQty);

    const [addToCart, setAddToCart] = useState(cart0);


    useEffect(() => {
        console.log("addToCart o cart actualizado");
        // console.log(addToCart);

        let alreadyInCart = cart.findIndex((i) => i.id === addToCart.id);
        // si el resultado del .findIndex es -1, entonces el Item no está en el carrito, entonces le hago un push
        // si encuentro un índice, actualizo la cantidad de ese Item en el carrito
        if (addToCart.id === "render") {
            console.log("render");
        } else if (alreadyInCart === -1) {
            const prodToCart = {
                id: addToCart.id,
                img: addToCart.img,
                title: addToCart.title,
                price: addToCart.price,
                qty: addToCart.qty,
            };
            setCart([...cart, prodToCart]);
            console.log("item nuevo");
            // console.log(cart)
            // para que no vuelva a entrar al if con un id válido ya que se actualizó el estado "cart"
            setAddToCart(cart0);
        } else {
            cart[alreadyInCart].qty = cart[alreadyInCart].qty + addToCart.qty;
            console.log("ya en carrito");
            // console.log(cart);
        }
    }, [addToCart, cart]);

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.qty;
        });
        setTotalQty(total);
    },[cart, addToCart]);


    // cart.forEach(item=>{
    // //     // totalPrice+= item.qty*item.price;
    //     totalQty = 0;
    //     totalQty+= item.qty;
    //     console.log(totalQty)
    // })

    return (
        <CartContext.Provider
            value={{ cart, setCart, totalQty, setTotalQty, setAddToCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

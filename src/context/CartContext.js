import { createContext, useEffect, useState } from "react";
// import { Button, ButtonGroup } from "@mui/material";

export const CartContext = createContext();

// const emptyCart = [];
// const startQty = 0;

// const cart0 = {
//     id: "render",
//     // img: "",
//     // title: "",
//     // price: 0,
//     // qty: 0,
// };

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    // const [addToCart, setAddToCart] = useState(cart0);
    const [addToCart, setAddToCart] = useState(null);

    const [btnUpId, setBtnUpId] = useState(null);
    const [btnDownId, setBtnDownId] = useState(null);
    const [deleteBtnId, setDeleteBtnId] = useState(null);

    const SetTotals = () => {
        let countQty = 0;
        let countPrice = 0;
        cart.forEach((item) => {
            countQty += item.qty;
            countPrice += item.qty * item.price;
        });
        setTotalQty(countQty);
        setGrandTotal(countPrice);
    }
    useEffect(()=>{
        SetTotals();
    });

    // useEffect(() => {
    //     // console.log("addToCart o cart actualizado");
    //     // console.log(addToCart);

    //     let alreadyInCart = cart.findIndex((i) => i.id === addToCart.id);
    //     // si el resultado del .findIndex es -1, entonces el Item no está en el carrito, entonces le hago un push
    //     // si encuentro un índice, actualizo la cantidad de ese Item en el carrito
    //     if (addToCart.id === "render") {
    //         // console.log("render");
    //     } else if (alreadyInCart === -1) {
    //         const prodToCart = {
    //             id: addToCart.id,
    //             img: addToCart.img,
    //             title: addToCart.title,
    //             price: addToCart.price,
    //             qty: addToCart.qty,
    //         };
    //         setCart([...cart, prodToCart]);
    //         // console.log("item nuevo");
    //         // console.log(cart)
    //         // para que no vuelva a entrar al if con un id válido ya que se actualizó el estado "cart"
    //         setAddToCart(cart0);
    //     } else {
    //         cart[alreadyInCart].qty = cart[alreadyInCart].qty + addToCart.qty;
    //         // console.log("ya en carrito");
    //         // console.log(cart);
    //     }
    // }, [addToCart, cart]);
    useEffect(() => {
        // console.log("addToCart o cart actualizado");
        // console.log(addToCart);

        // si el resultado del .findIndex es -1, entonces el Item no está en el carrito, entonces le hago un push
        // si encuentro un índice, actualizo la cantidad de ese Item en el carrito
        if (addToCart) {
            let alreadyInCart = cart.findIndex((i) => i.id === addToCart.id);
            if (alreadyInCart === -1) {
                const prodToCart = {
                    id: addToCart.id,
                    img: addToCart.img,
                    title: addToCart.title,
                    price: addToCart.price,
                    qty: addToCart.qty,
                };
                setCart([...cart, prodToCart]);
                // console.log("item nuevo");
                // console.log(cart)
                // para que no vuelva a entrar al if con un id válido ya que se actualizó el estado "cart"
                setAddToCart(null);
            } else {
                cart[alreadyInCart].qty =
                    cart[alreadyInCart].qty + addToCart.qty;
                setAddToCart(null);
                // console.log("ya en carrito");
                // console.log(cart);
            }
        } else {
            console.log("Else en ADD TO CART")
        }
    }, [addToCart, cart]);


    useEffect(()=>{
        if(btnUpId){
            let itemIndex = cart.findIndex((i) => i.id === btnUpId);
            cart[itemIndex].qty = cart[itemIndex].qty + 1;
            setBtnUpId(null);
        } else{
            console.log("ELSE BTN UP ID")
        }        
    },[btnUpId, cart])
    useEffect(()=>{
        if(btnDownId){
            let itemIndex = cart.findIndex((i) => i.id === btnDownId);
            if(cart[itemIndex].qty>1){
                cart[itemIndex].qty = cart[itemIndex].qty - 1;
            } else{
                console.log("la cantidad mínima es 1")
            }
            setBtnDownId(null);
        } else{
            console.log("ELSE BTN DOWN ID")
        }        
    },[btnDownId, cart])
    useEffect(()=>{
        if(deleteBtnId){
            let itemIndex = cart.findIndex((i) => i.id === deleteBtnId);
            console.log(cart[itemIndex])
            cart.splice(itemIndex,1);
            setDeleteBtnId(null);
        }else{
            console.log("Else delete btn id")
        }
    },[deleteBtnId, cart])



    // cart.forEach(item=>{
    // //     // totalPrice+= item.qty*item.price;
    //     totalQty = 0;
    //     totalQty+= item.qty;
    //     console.log(totalQty)
    // })

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                // setTotalQty,
                setAddToCart,
                setBtnUpId,
                setBtnDownId,
                setDeleteBtnId,
                totalQty,
                grandTotal,

            }}
        >
            {children}
        </CartContext.Provider>
    );
};

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

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

    useEffect(() => {
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
                setAddToCart(null);
            } else {
                cart[alreadyInCart].qty =
                    cart[alreadyInCart].qty + addToCart.qty;
                setAddToCart(null);
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


    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
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

import { createContext, useState } from "react";
// import { Button, ButtonGroup } from "@mui/material";

export const CartContext = createContext();


const emptyCart = [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(emptyCart);

    return <CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
}



// Botones de sumar y restar producto

// const defaultQty = 1;

// export const QtyPicker = () => {
//     const [qty, setQty] = useState(defaultQty);

//     const minus = () => {
//         if(qty>1){
//             setQty(qty-1);
//         }
//     }

//     const plus = () => {
//         setQty(qty+1);
//     }

//     return (
//         <ButtonGroup variant="outlined" aria-label="outlined button group">
//             <Button onClick={minus}>-</Button>
//             <Button style={{ pointerEvents: 'none' }}>{qty}</Button>
//             <Button onClick={plus}>+</Button>
//         </ButtonGroup>
//     );
// };

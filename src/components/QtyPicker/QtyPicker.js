// import "./QtyPicker.css";
// import { useState } from "react";

// import { Button, ButtonGroup } from "@mui/material";

// const defaultQty = 1;

// export const QtyPicker = () => {
//     const [qty, setQty] = useState(defaultQty);

//     console.log(qty)

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

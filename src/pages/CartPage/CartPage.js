import "./CartPage.css";

import React from "react";
import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import OrderSuccessMsg from "../../components/OrderSuccessMsg/OrderSuccessMsg";
import CartReviewCard from "../../components/CartReviewCard/CartReviewCard";

const initialState = {
    name: "",
    surname: "",
    address1: "",
    address2: "",
    city: "",
    phone: "",
    email: "",
    emailcheck: "",
};

const CartPage = () => {
    const [values, setValues] = useState(initialState);

    const [orderId, setOrderId] = useState(null);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef = await addDoc(collection(db, "ordersCollection"), {
            values,
        });
        setOrderId(docRef.id);
        // console.log("Document written with ID: ", docRef.id);
        setValues(initialState);
    };

    const { cart } = useContext(CartContext);

    // Falta desarrollar relación con el item y actualización del carrito
    // const [qty, setQty] = useState(1);

    return (
        <div>
            <h1>Cart Summary</h1>
            <div className="CartPage">
                <div className="CartReview">
                    {cart.map((item) => {
                        return (
                            <div key={item.id}>
                                <CartReviewCard item={item} />
                            </div>
                            //     <Card sx={{}} className="CartCard" key={item.id}>
                            //         <Box className="CartCardGrid">
                            //             <CardMedia
                            //                 image={item.img}
                            //                 title={item.title}
                            //                 className="thmb"
                            //             />
                            //             <Box className="summary">
                            //                 <CardContent>
                            //                     <Typography
                            //                         gutterBottom
                            //                         variant="h6"
                            //                         component="div"
                            //                     >
                            //                         {item.title}
                            //                     </Typography>
                            //                     <Typography
                            //                         variant="body2"
                            //                         color="text.secondary"
                            //                     >
                            //                         {item.qty} x €{item.price} = €{item.qty*item.price}
                            //                     </Typography>
                            //                 </CardContent>
                            //                 <CardActions sx={{justifyContent: "center"}}>
                            //                     <ButtonGroup
                            //                         variant="outlined"
                            //                         aria-label="outlined button group"
                            //                     >
                            //                         <Button
                            //                             // onClick={() =>
                            //                             //     item.qty > 1
                            //                             //         ? item.qty = item.qty-1
                            //                             //         : null
                            //                             // }
                            //                         >
                            //                             -
                            //                         </Button>
                            //                         <Button
                            //                             style={{
                            //                                 pointerEvents: "none",
                            //                             }}
                            //                         >
                            //                             {item.qty}
                            //                         </Button>
                            //                         <Button
                            //                             // onClick={() =>
                            //                             //     item.qty = item.qty+1
                            //                             // }
                            //                         >
                            //                             +
                            //                         </Button>
                            //                     </ButtonGroup>
                            //                     <IconButton
                            //                         aria-label="delete"
                            //                         size="small"
                            //                         className="deleteBtn"
                            //                     >
                            //                         <DeleteOutlineIcon fontSize="medium" />
                            //                     </IconButton>{" "}
                            //                 </CardActions>
                            //             </Box>
                            //         </Box>
                            //     </Card>
                        );
                    })}
                </div>
                <form className="CartForm" onSubmit={onSubmit}>
                    <TextField
                        placeholder="Name"
                        name="name"
                        className="CartFormInput"
                        value={values.name}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Surname"
                        name="surname"
                        className="CartFormInput"
                        value={values.surname}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Address"
                        name="address1"
                        className="CartFormInput"
                        value={values.address1}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Foor, Apt, Unit"
                        name="address2"
                        className="CartFormInput"
                        value={values.address2}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="City"
                        name="city"
                        className="CartFormInput"
                        value={values.city}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="678912345"
                        name="phone"
                        className="CartFormInput"
                        value={values.phone}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="email"
                        name="email"
                        className="CartFormInput"
                        value={values.email}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="confirm email"
                        name="emailcheck"
                        className="CartFormInput"
                        value={values.emailcheck}
                        onChange={handleOnChange}
                    />
                    <Button
                        className="CartFormInput"
                        type="submit"
                        variant="outlined"
                        color="success"
                    >
                        Submit
                    </Button>
                </form>

                {orderId ? <OrderSuccessMsg orderId={orderId} /> : null}
            </div>
        </div>
    );
};

export default CartPage;

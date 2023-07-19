import "./CartPage.css";

import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import OrderSuccessMsg from "../../components/OrderSuccessMsg/OrderSuccessMsg";
import CartReviewCard from "../../components/CartReviewCard/CartReviewCard";
import CartTotalCard from "../../components/CartTotalCard/CartTotalCard";

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

    const [incompleteForm, setIncompleteForm] = useState(true);

    const { cart, grandTotal, setCart } = useContext(CartContext);
    console.log(grandTotal);
    console.log(cart.length)

    const checkForm = () => {
        if (
            values.address1 === "" ||
            values.city === "" ||
            values.email === "" ||
            values.emailcheck === "" ||
            values.name === "" ||
            values.phone === "" ||
            values.surname === ""
        ) {
            setIncompleteForm(true);
            console.log("incompleto");
        } else if (values.email !== values.emailcheck) {
            setIncompleteForm(true);
            console.log("email diferente");
        } else if (cart.length === 0) {
            setIncompleteForm(true);
        } else {
            setIncompleteForm(false);
            console.log("form ok");
        }
    };
    useEffect(() => {
        checkForm();
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        cart.forEach(obj => {
            delete obj['img'];
        });
        
        console.log(cart);
        const docRef = await addDoc(collection(db, "ordersCollection"), {
            values, cart,
        });
        setOrderId(docRef.id);
        // console.log("Document written with ID: ", docRef.id);
        setValues(initialState);
        setCart([]);
    };

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
                        );
                    })}
                    <CartTotalCard grandTotal={grandTotal} />
                </div>
                <form className="CartForm" onSubmit={onSubmit}>
                    <TextField
                        required
                        name="name"
                        label="Name"
                        className="CartFormInput"
                        value={values.name}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        name="surname"
                        label="Surname"
                        className="CartFormInput"
                        value={values.surname}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        name="address1"
                        label="Address"
                        className="CartFormInput"
                        value={values.address1}
                        onChange={handleOnChange}
                    />
                    <TextField
                        label="Foor, Apt, Unit"
                        name="address2"
                        className="CartFormInput"
                        value={values.address2}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        label="City"
                        name="city"
                        className="CartFormInput"
                        value={values.city}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        label="Phone Number"
                        name="phone"
                        className="CartFormInput"
                        value={values.phone}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        label="E-Mail"
                        name="email"
                        className="CartFormInput"
                        value={values.email}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        label="Confirm E-Mail"
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
                        disabled={incompleteForm}
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <div sx={{display: "flex"}}>
                {orderId ? <OrderSuccessMsg orderId={orderId}/> : null}

            </div>
        </div>
    );
};

export default CartPage;

import "./CartPage.css";

import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import OrderSuccessMsg from "../../components/OrderSuccessMsg/OrderSuccessMsg";

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

    const [orderId, setOrderId] = useState(null)

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef = await addDoc(collection(db, "ordersCollection"), {
            values
        });
        setOrderId(docRef.id);
        // console.log("Document written with ID: ", docRef.id);
        setValues(initialState);
    };

    return (
        <div>
            <h1>Cart</h1>
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
                <Button className="CartFormInput" type="submit" variant="outlined" color="success">
                    Submit
                </Button>
            </form>

            {orderId ? <OrderSuccessMsg orderId={orderId}/> : null}
        </div>
    );
};

export default CartPage;

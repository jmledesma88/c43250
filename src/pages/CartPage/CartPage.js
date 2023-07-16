import "./CartPage.css";

import React from "react";
import { TextField } from "@mui/material";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useState } from "react";

// import { db } from "../../firebase/firebaseConfig";
// import {collection, query, getDocs} from "firebase/firestore";


const initialState = {
    name: "",
    surmame: "",
    address1: "",
    address2: "",
    city: "",
    phone: "",
    email: "",
}

const CartPage = () => {
    const [values, setValues] = useState(initialState)

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <div>
            <h1>Cart</h1>
            <form className="CartForm" onSubmit={onSubmit}>
                <TextField placeholder="Name" name="name" className="CartFormInput" value={values.name} onChange={handleOnChange}/>
                <TextField placeholder="Surname" name="surname" className="CartFormInput" value={values.surmame} onChange={handleOnChange}/>
                <TextField placeholder="Address" name="address1" className="CartFormInput" value={values.address1} onChange={handleOnChange}/>
                <TextField placeholder="Foor, Apt, Unit" name="address2" className="CartFormInput" value={values.address2} onChange={handleOnChange}/>
                <TextField placeholder="City" name="city" className="CartFormInput" value={values.city} onChange={handleOnChange}/>
                <TextField placeholder="678912345" name="number" className="CartFormInput" value={values.phone} onChange={handleOnChange}/>
                <TextField placeholder="email" name="email" className="CartFormInput" value={values.email} onChange={handleOnChange}/>
                <TextField placeholder="confirm email" name="emailcheck" className="CartFormInput" onChange={handleOnChange}/>
                <button className="CartFormInput" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CartPage;

import React from "react";
// import { useState } from "react";
// import { TextField, Button } from "@mui/material";

const ContactPage = () => {
    // const [value,setValue] = useState("");
    
    // const handleOnChange = (e) => {
    //     setValue(e.target.value)
    // };

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(value);
    //     const userInput = value.toLowerCase;
    //     console.log(userInput);
    // };

    return (
        <div>
            <h1 className="mt-3">Contact</h1>
            {/* <form className="Form" onSubmit={handleOnSubmit}>
                <TextField
                    placeholder="Name"
                    variant="outlined"
                    className="Textfield"
                    value={value}
                    onChange={handleOnChange}
                />
            <Button className="btn" variant="outlined" type="submit">
                Submit
            </Button>
            </form> */}

        </div>
    );
};

export default ContactPage;

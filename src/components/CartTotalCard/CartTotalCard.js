import "./CartTotalCard.css";
import React from "react";
import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

const CartTotalCard = ({grandTotal}) => {
    return (
        <Card sx={{}} className="CartTotalCard">
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className="CartTotalText">
                        { grandTotal>0 ? `Your order total is: €${grandTotal}` : "Your Cart is empty."}
                    </Typography>
                </CardContent>
        </Card>
    );
};

export default CartTotalCard;

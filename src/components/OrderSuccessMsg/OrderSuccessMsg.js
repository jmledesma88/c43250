import { Alert } from "@mui/material";
import "./OrderSuccessMsg.css"

const OrderSuccessMsg = ({orderId}) => {
    return(
            <Alert variant="outlined" severity="success"  className="SuccessMsg">
                Your order has been placed successfully! Your order number is {orderId}.
            </Alert>
    );
};

export default OrderSuccessMsg;
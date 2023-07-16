import { Alert, Stack } from "@mui/material";

const OrderSuccessMsg = ({orderId}) => {
    return(
        <Stack sx={{width: "100%"}} spacing={2}>
            <Alert severity="success">
                Your order has been placed successfully! Your order number is {orderId}.
            </Alert>
        </Stack>
    );
};

export default OrderSuccessMsg;
import "./CartTotalCard.css";
import React from "react";
import {
    Card,
    Box,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    ButtonGroup,
    Button,
    IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartTotalCard = (item) => {
    return (
        <Card sx={{}} className="CartCard" key={item.id}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Grand Total
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Order total $$$
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                    >
                        <Button
                        // onClick={() =>
                        //     item.qty > 1
                        //         ? item.qty = item.qty-1
                        //         : null
                        // }
                        >
                            -
                        </Button>
                        <Button
                            style={{
                                pointerEvents: "none",
                            }}
                        >
                            {item.qty}
                        </Button>
                        <Button
                        // onClick={() =>
                        //     item.qty = item.qty+1
                        // }
                        >
                            +
                        </Button>
                    </ButtonGroup>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        className="deleteBtn"
                    >
                        <DeleteOutlineIcon fontSize="medium" />
                    </IconButton>{" "}
                </CardActions>
        </Card>
    );
};

export default CartTotalCard;

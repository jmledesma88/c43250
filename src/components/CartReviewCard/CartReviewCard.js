import "./CartReviewCard.css";
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
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartReviewCard = ({ item }) => {
    const { id, img, title, qty, price } = item;

    const { setBtnUpId, setBtnDownId, setDeleteBtnId } = useContext(CartContext);

    return (
        <Card sx={{}} className="CartCard" key={id}>
            <Box className="CartCardGrid">
                <CardMedia image={img} title={title} className="thmb" />
                <Box className="summary">
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {qty} x €{price} = €{qty * price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                        >
                            <Button onClick={()=> setBtnDownId(id)}>-</Button>
                            <Button
                                style={{
                                    pointerEvents: "none",
                                }}
                            >
                                {qty}
                            </Button>
                            <Button onClick={() => setBtnUpId(id)}>+</Button>
                        </ButtonGroup>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            className="deleteBtn"
                            onClick={()=> setDeleteBtnId(id)}
                        >
                            <DeleteOutlineIcon fontSize="medium" />
                        </IconButton>{" "}
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default CartReviewCard;

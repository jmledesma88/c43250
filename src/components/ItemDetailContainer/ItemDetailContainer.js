import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import "./ItemDetailContainer.css";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ item }) => {
    const { id, img, title, category, description, price } = item;

    // cantidad por defecto del selector y estado
    const defaultQty = 1;
    const [qty, setQty] = useState(defaultQty);

    // traigo carrito del context
    const { setAddToCart } = useContext(CartContext);
    // console.log(cart);


    const prod = {
        id: id,
        img: img,
        title: title,
        price: price,
        qty: qty,
    }


    return (
        <Card className="ItemDetailContainer" id={id}>
                <CardMedia component="img" image={img} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {category}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        ${price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                    <div>
                        <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                        >
                            <Button
                                onClick={() =>
                                    qty > 1 ? setQty(qty - 1) : null
                                }
                            >
                                -
                            </Button>
                            <Button style={{ pointerEvents: "none" }}>
                                {qty}
                            </Button>
                            <Button onClick={() => setQty(qty + 1)}>+</Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        <Button onClick={() => setAddToCart(prod)}>Add to Cart</Button>
                    </div>
                </CardContent>
        </Card>
    );
};

export default ItemDetailContainer;

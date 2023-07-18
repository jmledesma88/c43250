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
    const { cart, setCart, setTotalQty } = useContext(CartContext);
    // console.log(cart);

    // calculo la cantidad de artículos actual en el carrito
    let total = 0;
    cart.forEach((item) => {
        total += item.qty;
    });

    const AddToCart = () => {
        let alreadyInCart = cart.findIndex((i) => i.id === id);
        // si el resultado del .findIndex es -1, entonces el Item no está en el carrito, entonces le hago un push
        // si encuentro un índice, actualizo la cantidad de ese Item en el carrito
        if (alreadyInCart === -1) {
            const prodToCart = {
                id: item.id,
                img: item.img,
                title: item.title,
                price: item.price,
                qty: qty,
            };
            setCart([...cart, prodToCart]);
        } else {
            cart[alreadyInCart].qty = cart[alreadyInCart].qty + qty;
            // console.log(cart[alreadyInCart].qty)
        }

        // actualizo la cantidad total de artículos en el carrito
        setTotalQty(total+qty);
    };

    return (
        <Card className="ItemDetailContainer">
            {/* <CardActionArea> */}
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
                        {/* <Button onClick={() => setAddToCart(true)}> */}
                        <Button onClick={() => AddToCart()} id={id}>
                            Add to cart
                        </Button>
                    </div>
                </CardContent>
            {/* </CardActionArea> */}
        </Card>
    );
};

export default ItemDetailContainer;

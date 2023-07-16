import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import "./ItemDetailContainer.css";
import { QtyPicker, CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ item }) => {
    const { id, img, title, category, description, price } = item;

    const [cart, setCart] = useContext(CartContext);
    console.log(cart)
    const addToCart = () => {
        setCart("hola")
    }
    // docs.push({ ...doc.data(), id: doc.id });

    return (
        <Card className="ItemDetailContainer">
            <CardActionArea>
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
                    <Typography>
                        <QtyPicker />
                    </Typography>
                    <Typography>
                        <Button onClick={addToCart}>Add to cart</Button>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemDetailContainer;

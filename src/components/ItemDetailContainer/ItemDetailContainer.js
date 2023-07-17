import { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, ButtonGroup } from "@mui/material";
import "./ItemDetailContainer.css";
import { CartContext } from "../../context/CartContext";
// import { Diversity1Rounded } from "@mui/icons-material";

const ItemDetailContainer = ({ item }) => {
    const { id, img, title, category, description, price } = item;

    // cantidad por defecto del selector y estado
    const defaultQty = 1;
    const [qty, setQty] = useState(defaultQty);

    // traigo carrito del context
    const [cart, setCart] = useContext(CartContext);
    // console.log(cart);

    // boton agregar
    const [addToCart, setAddToCart] = useState(false)

    useEffect(() => {
        if(addToCart){
            const alreadyInCart = cart.findIndex(i=>i===item.id);
            console.log(alreadyInCart);
            if(alreadyInCart === -1){
                const prodToCart = {
                    id: item.id,
                    price: item.price,
                    qty: {qty}
                }
                setCart(cart.push(prodToCart))
                console.log(cart)
            } else{
                console.log("ya está en carrito")
            }
            setAddToCart(false);
        }
    }, [addToCart]);
    
        
    // botón agregar al carrito
    // const addToCart = () => {
    //             // chequeo si el item existe en el carrito
    //             const alreadyInCart =
    //                 cart.findIndex(prod => prod.id === item.id);
    //             console.log(alreadyInCart);
    //             if (alreadyInCart === -1) {
    //                 // si no estaba creo un objeto con las propiedades del producto seleccionado y cantidad = 1 y lo agrego al carrito
    //                 const prodToCart = {
    //                     id: item.id,
    //                     // name: item.title,
    //                     price: item.price,
    //                     qty: { qty },
    //                 };
    //                 setCart(cart.push(prodToCart));
    //                 console.log(cart);
    //                 console.log(cart.length);
    //                 // } else {
    //                 //     // si ya estaba en el carrito le sumo una unidad
    //                 //     {cart[alreadyInCart].qty+{qty}};
    //                 //     console.log(cart)
    //             }
    //     };
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
                            <Button onClick={() => setQty(qty + 1) }>+</Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        {/* <Button onClick={() => setAddToCart(true)}> */}
                        <Button onClick={() => setAddToCart(true)}>
                            Add to cart
                        </Button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemDetailContainer;

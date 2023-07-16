import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ItemPrevContainer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemPrevContainer = ({ item }) => {
    const { img, title, category, price } = item;


    // AOS - Animate on scroll para las tarjetas de vista previa de item
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <Card className="ItemPrevContainer">
                <CardActionArea>
                    <CardMedia component="img" image={img} alt={title} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            ${price}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default ItemPrevContainer;

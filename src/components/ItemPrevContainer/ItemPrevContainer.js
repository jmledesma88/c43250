import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ItemPrevContainer.css";

const ItemPrevContainer = ({ item }) => {
    const { img, title, category, price } = item;

    return (
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
    );
};

export default ItemPrevContainer;
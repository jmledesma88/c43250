import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ item }) => {
const { image, title, category, rating, price } = item;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={title} />
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
            {rating.rate} | {rating.count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemDetailContainer;

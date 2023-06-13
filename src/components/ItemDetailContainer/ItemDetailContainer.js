import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ char }) => {
  const { image, title, category, rating } = char;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {rating.rate} | {rating.count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;

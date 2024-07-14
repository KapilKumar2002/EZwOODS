import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DiningP from "../../assets/diningP.jpg";
import RatingReadOnly from "../atoms/RatingReadOnly";
import { Link } from "react-router-dom";

export default function CatalogCard(props) {
  const { name, price, rating } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="font-headingFont">
      <CardActionArea>
        <Link to={"/product/1"}>
          <CardMedia
            component="img"
            height="140"
            image={DiningP}
            alt="green iguana"
          />
        </Link>
        <CardContent className="flex items-center justify-between">
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            variant="body"
            color="text.primary"
            className="font-semibold"
          >
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <RatingReadOnly defaultValue={2.5} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

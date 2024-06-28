import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DiningP from "../../assets/diningP.jpg";
import RatingReadOnly from "../atoms/RatingReadOnly";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { Button } from "@material-tailwind/react";

export default function WishListProduct(props) {
  const { name, price, rating } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="font-headingFont rounded-lg">
      <CardActionArea>
        <Link to={"/product/1"}>
          <CardMedia
            component="img"
            height="140"
            image={DiningP}
            alt="green iguana"
          />
        </Link>
        <CardContent className="">
          <div className="flex items-center justify-between">
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
          </div>
          <RatingReadOnly defaultValue={2.5} />
        </CardContent>
        <CardActions className="flex justify-between z-50 sticky  hover:static">
          <Button size="small" className="bg-primaryColor text-black">
            Add to Cart
          </Button>
          <Fab aria-label="add" size="small">
            <MdOutlineFavorite className="text-2xl text-red-500" />
          </Fab>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

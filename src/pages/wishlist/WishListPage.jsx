import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import WishListProduct from "../../components/molecules/WishListProduct";
import { Container } from "@mui/material";
import Title from "../../components/atoms/Title";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const WishListPage = () => {
  return (
    <Container>
      <div className="my-5">
        <Title title={`Wishlist (11)`} />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className={"place-content-center"}>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
          <Grid>
            <WishListProduct name={"Dining Table"} price={"$ 5692"} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WishListPage;

import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import diningP from "../../assets/diningP.jpg";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Login</h1>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="w-full"
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              className="w-full"
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              className="w-full"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="w-full"
            />
            <Button variant="contained">Login</Button>
          </div>
          <div className="w-full relative">
            <div className="absolute h-40 w-40 border-l-2 border-t-2 border-cyan-500 top-0 left-0"></div>
            <div className="h-[700px] relative m-10 top-0 left-0">
              <img
                src={diningP}
                alt=""
                className="h-96 w-[90%] absolute top-0 left-0"
              />
              <img
                src={diningP}
                alt=""
                className="h-96 w-[90%] absolute bottom-0 right-0"
              />
            </div>
            <div className="absolute h-40 w-40 border-b-2 border-r-2 border-cyan-500 bottom-0 right-0"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

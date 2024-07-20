import { Container, TextField } from "@mui/material";
import React from "react";
import diningP from "../../assets/diningP.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="lg:h-screen h-full w-full flex justify-center items-center">
      <Container>
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-20 my-20 duration-700">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-2xl font-extrabold text-primaryColor">Login</h1>
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
            <button className="bg-primaryColor h-12 rounded-lg shadow-lg font-extrabold text-lg">
              Login
            </button>
            <Link
              to={"/register"}
              className="flex text-xs justify-center gap-1"
            >
              <p>Don't have an account? </p>
              <h1 className="font-bold">Signup</h1>
            </Link>
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

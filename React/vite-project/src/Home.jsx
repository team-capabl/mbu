import React from "react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-1">
        <h1 className="text-4xl">Welcome to Fake Store</h1>
      </div>
      <div className="flex justify-center">
        <Button className="text-lg mt-5">
          <Link to={"/products"}>Shop Now </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
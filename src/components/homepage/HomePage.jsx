import React from "react";
import Books from "./books/Books";
import Pictures from "./books/Pictures";

const HomePage = () => {
  return (
    <div className="top">
      <Pictures />
      <Books />
    </div>
  );
};

export default HomePage

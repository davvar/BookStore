import React from "react";
import { connect } from "react-redux";

const Books = ({ books }) => {
  return (
    <div style={{ color: "white", fontSize: 50 }}>
          {books.map(prod => (
              <div>
                  <img src={prod.img} alt=""/>
          </div>
      ))}
    </div>
  );
};

export default connect(({ books }) => ({ books }))(Books);

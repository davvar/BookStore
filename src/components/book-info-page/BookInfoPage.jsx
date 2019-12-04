//----------------------------------//
//----------------------------------//
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//----------------------------------//
//----------------------------------//

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./book-info-page.css";

import YouMayLike from "./parts/YouMayLike";
import BookInfo from "./parts/BookInfo";

import { closeLearnMore } from "../../store/actions/actions";
import CloseIcon from "../close-icon/CloseIcon";

const BookInfoPage = ({ closeLearnMore }) => {
  let [position, setPosition] = useState(-100);

  useEffect(() => {
    setTimeout(() => setPosition(0));
  }, []);

  const closingInfoWithDelay = () => (
    setPosition(-100), setTimeout(closeLearnMore, 400)
  );

  return (
    <div className="main-div" style={{ transform: `translate(${position}%)` }}>
      <CloseIcon close={closingInfoWithDelay} />
      <BookInfo />
      <YouMayLike />
    </div>
  );
};

export default connect(null, { closeLearnMore })(BookInfoPage);

//import React, { Component } from "react";
// import { connect } from "react-redux";

// import "./book-info-page.css";

// import YouMayLike from "./parts/YouMayLike";
// import Book from "./parts/Book";

// import { closeLearnMore } from "../../store/actions/actions";

// class BookInfoPage extends Component {
//   constructor() {
//     super();
//     this.state = { position: -100 };
//   }
//   componentDidMount() {
//     setTimeout(() => this.setState({ position: 0 }));
//   }

//   closingInfoWithDelay = () => (
//     this.setState({ position: -100 }),
//     setTimeout(this.props.closeLearnMore, 400)
//   );

//   render() {
//     return (
//       <div
//         className="main-div"
//         style={{ transform: `translate(${this.state.position}%)` }}
//       >
//         <i onClick={this.closingInfoWithDelay} className="fa fa-times"></i>
//         <Book />
//         <YouMayLike />
//       </div>
//     );
//   }
// }

// export default connect(null, { closeLearnMore })(BookInfoPage);

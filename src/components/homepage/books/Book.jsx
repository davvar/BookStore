
//----------------------------------//
//----------------------------------//
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//----------------------------------//
//----------------------------------//

import React, { Fragment, useState } from "react";
import BookLayer from "./BookLayer";

const Book = ({ img, id, sequence }) => {
  let [coordinates, setCoordinates] = useState({
    position: "relative",
    top: 0,
    left: 0
  });

  const movingTo = num => {
    setCoordinates({
      position: "relative",
      top: -580,
      left: num - sequence * 250,
      transform: "rotate(720deg) scale(.5)",
      transition: `all ${0.8 - sequence * 0.1}s`
    });
  };


  return (
    <Fragment>
      <div
        className="firstPage-book"
        style={{
          ...coordinates,
          background: `url(${img})  center `,
          backgroundSize: "contain"
        }}
      >
        <BookLayer
          movingToFavs={() => movingTo(1568)}
          movingToCart={() => movingTo(1475)}
          id={id}
        />
      </div>
    </Fragment>
  );
};

export default Book;

// import React, { Fragment, Component } from "react";
// import BookLayer from "./BookLayer";

// class Book extends Component {
//   constructor() {
//     super();
//     this.state = {
//       coordinates: {
//         position: "relative",
//         top: 0,
//         left: 0
//       }
//     };
//   }

//   movingTo = num => {
//     this.setState({
//       coordinates: {
//         position: "relative",
//         top: -580,
//         left: num - this.props.sequence * 250,
//         transform: "rotate(720deg) scale(.5)",
//         transition: `all ${0.8 - this.props.sequence * 0.1}s`
//       }
//     });
//   };

//   render() {
//     return (
//       <Fragment>
//         <div
//           className="firstPage-book"
//           style={{
//             ...this.state.coordinates,
//             background: `url(${this.props.img})  center `,
//             backgroundSize: "contain"
//           }}
//         >
//           <BookLayer
//             movingToFavs={() => this.movingTo(1568)}
//             movingToCart={() => this.movingTo(1475)}
//             id={this.props.id}
//           />
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default Book;

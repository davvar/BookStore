//----------------------------------//
//----------------------------------//
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//----------------------------------//
//----------------------------------//


import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import resize from "./resize";
import routes from "./routes";

import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./components/homepage/HomePage";

import Cart from "./components/cart/Cart";
import BookInfoPage from "./components/book-info-page/BookInfoPage";

function App({ cartIsOpen, openBookInfo }) {
  useEffect(() => resize(), []);

  return (
    <div className="App">
      <NavBar />
      {cartIsOpen && <Cart />}
      {openBookInfo && <BookInfoPage />}

      <Switch>
        {routes.map(({ path, component, id }) => (
          <Route path={path} component={component} key={id} />
        ))}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
let mapStateToProps = ({ cartIsOpen, openBookInfo }) => ({
  cartIsOpen,
  openBookInfo
});

export default connect(mapStateToProps)(App);


// import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";

// import resize from "./resize";
// import routes from "./routes";

// import "./App.css";
// import NavBar from "./components/nav-bar/NavBar";
// import HomePage from "./components/homepage/HomePage";

// import Cart from "./components/cart/Cart";
// import BookInfoPage from "./components/book-info-page/BookInfoPage";

// class App extends Component {
//   componentDidMount() {
//     resize();
//   }

//   render() {
//     let { cartIsOpen, openBookInfo } = this.props
//     return (
//       <div className="App">
//         {cartIsOpen && <Cart />}
//         {openBookInfo && <BookInfoPage />}

//         <Switch>
//         <NavBar />
//           {routes.map(({ path, component, id }) => (
//             <Route path={path} component={component} key={id} />
//           ))}
//           <Route exact path="/" component={HomePage} />
//         </Switch>
//       </div>
//     );
//   }
// }
// let mapStateToProps = ({ cartIsOpen, openBookInfo }) => ({
//   cartIsOpen,
//   openBookInfo
// });

// export default connect(mapStateToProps)(App);

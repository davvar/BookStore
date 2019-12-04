import React, { useState, Fragment } from "react";

let initPosOfPic1 = {
  left: "85%",
  top: "46%",
  width: 150,
  height: 210
};
let initPosOfPic2 = {
  right: "72%",
  top: "20%",
  width: 245,
  height: 218
};
let centerOfPage = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%) scale(3)",
  zIndex: 200,
  cursor: "zoom-out",
  boxShadow: "none"
};
let layerStyle = {
  zIndex: 110,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(156, 156, 156, 0.86)"
};
const Pictures = () => {
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//
  let [posOfPic1, setPosOfPic1] = useState({ ...initPosOfPic1 });
  let [posOfPic2, setPosOfPic2] = useState({ ...initPosOfPic2 });
  let [layer2, setLayer2] = useState({});
  let [layer, setLayer] = useState({});

  const toggleSuper = (state, setState, initialState, layer) =>
    state.top === "50%"
      ? (setState(initialState), layer({}))
      : (setState(centerOfPage), layer(layerStyle));

  let pic2Zoomer = toggleSuper
                        .bind({}, posOfPic2, setPosOfPic2, initPosOfPic2, setLayer2);
  let pic1Zoomer = toggleSuper
                        .bind({}, posOfPic1, setPosOfPic1, initPosOfPic1, setLayer);
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//
  // ----------------HARDCODING-HARDCODING-HARDCODING-------------------//

  return (
    <Fragment>
      <div onClick={pic1Zoomer} className="pic-layer" style={layer}>
        <div onClick={pic1Zoomer} style={posOfPic1} className="pics pic1"></div>
      </div>
      <div onClick={pic2Zoomer} className="pic-layer" style={layer2}>
        <div onClick={pic2Zoomer} style={posOfPic2} className="pics pic2"></div>
      </div>
      <div className="cactus"></div>
    </Fragment>
  );
};

export default Pictures;

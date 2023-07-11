import React from "react";
import Temperature from "./Temperatura";
import "./styles.css";
function LightRoom({ isLight }) {
  const [light, setLight] = React.useState(isLight);
  function toggleLight() {
    setLight(!light);
  }
  function onnLight(changer) {
    setLight(changer);
  }
  const styleRoom = light ? "yellow" : "darkgrey";
  const [opacity, dispatch] = React.useReducer(reducer, "1");
  function reducer(state, action) {
    switch (action) {
      case "0.9":
        return (state = action);
      case "0.7":
        return (state = action);
      case "0.5":
        return (state = action);
      default:
        return (state = "1");
    }
  }
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ backgroundColor: styleRoom, opacity: opacity }}
      >
        <div className="degree" style={{ backgroundColor: styleRoom }}>
          <Temperature degree="°C" />
        </div>
        <h3>{light ? "The Room is LIT" : "The room is Dark"}</h3>
        <button className="button" onClick={toggleLight}>
          Theme switch
        </button>
        <button className="button" onClick={() => onnLight(true)}>
          Onn
        </button>
        <button className="button" onClick={() => onnLight(false)}>
          Off
        </button>
        <button className="button" onClick={() => dispatch("0.9")}>
          0.9 opacity
        </button>
        <button className="button" onClick={() => dispatch("0.7")}>
          0.7 opacity
        </button>
        <button className="button" onClick={() => dispatch("0.5")}>
          0.5 opacity
        </button>
        <button className="button" onClick={() => dispatch("")}>
          reset opacity
        </button>
      </div>
    </React.Fragment>
  );
}
export default LightRoom;

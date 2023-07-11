import { useState } from "react";
import "./styles.css";
function Temperature({ degree }) {
  const [temperature, setTemperature] = useState(0);
  function changeTemperature(count) {
    setTemperature((temperature) => temperature + count);
  }
  return (
    <>
      <div className="temperature">
        Temperature: {temperature} {degree}
        <button className="btn" onClick={() => changeTemperature(1)}>
          +
        </button>
        <button className="btn" onClick={() => changeTemperature(-1)}>
          -
        </button>
      </div>
    </>
  );
}
export default Temperature;

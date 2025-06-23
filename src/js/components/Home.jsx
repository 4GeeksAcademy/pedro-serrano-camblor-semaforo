import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="traffic-light bg-dark rounded p-3">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">Semáforo</h1>
      <TrafficLight />
    </>
  );
};

export default Home;

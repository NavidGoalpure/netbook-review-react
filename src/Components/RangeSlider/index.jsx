import { useState } from "react";
import ReactSlider from "react-slider";
import "./style.css";
const RangeSlider = () => {
  return (
    <section id="slider-container">
      <h2
        className="titles"
        style={{ marginTop: "3.5rem", marginBottom: "2.5rem" }}
      >
        4. How much money you can invest?
      </h2>
      <div id="slider-wrapper">
        <ReactSlider
          className="horizontal-slider"
          defaultValue={25000}
          // marks={10000}
          // minDistance={10000}
          step={1000}
          markClassName="example-mark"
          min={2000}
          max={50000}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
        <div id="slider-label-row">
          <div className="slider-label-item">$2000</div>
          <div className="slider-label-item">$50000</div>
        </div>
      </div>
    </section>
  );
};
export default RangeSlider;

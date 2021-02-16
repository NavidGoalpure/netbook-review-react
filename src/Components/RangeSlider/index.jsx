import ReactSlider from "react-slider";
import "./style.css";

const RangeSlider = ({
  title,
  defaultValue,
  step,
  min,
  max,
  minLabel,
  maxLabel,
}) => {
  return (
    <section id="slider-container">
      <h2
        className="titles"
        style={{ marginTop: "3.5rem", marginBottom: "2.5rem" }}
      >
        {title}
      </h2>
      <div id="slider-wrapper">
        <ReactSlider
          className="horizontal-slider"
          defaultValue={defaultValue}
          // marks={10000}
          // minDistance={10000}
          step={step}
          markClassName="example-mark"
          min={min}
          max={max}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
        <div id="slider-label-row">
          <div className="slider-label-item">{minLabel}</div>
          <div className="slider-label-item">{maxLabel}</div>
        </div>
      </div>
    </section>
  );
};
export default RangeSlider;

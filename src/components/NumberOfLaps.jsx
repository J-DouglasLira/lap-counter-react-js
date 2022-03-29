import "../styles/Components.scss";

const NumberOfLaps = (props) => {
  return (
    <p className="laps-number">
      <span>
        {props.lapsNumber} <br />
      </span>
      Laps
    </p>
  );
};

export default NumberOfLaps;

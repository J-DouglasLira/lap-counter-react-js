import "../styles/Components.scss";

const AverageTime = (props) => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const secondsStr = seconds < 10 ? "0" + seconds : seconds;
  return (
    <p>
      {`${minutesStr}:${secondsStr}`} <br />
      Average lap time
    </p>
  );
};

export default AverageTime;

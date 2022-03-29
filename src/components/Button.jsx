import "../styles/Components.scss";
const Button = (props) => {
  return <button {...props}>{props.text}</button>;
};

export default Button;

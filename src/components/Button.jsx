const Button = ({ text, onClick }) => {
  return (
    <button style={{ cursor: "pointer" }} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;

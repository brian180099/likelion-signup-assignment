export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="button-primary"
    >
      {text}
    </button>
  );
}


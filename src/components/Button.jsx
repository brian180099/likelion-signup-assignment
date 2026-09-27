export default function Button({
  text,
  type = 'button',
  onClick,
  disabled = false,
  active = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button-primary ${active ? 'button-clicked' : ''}`}
    >
      {text}
    </button>
  );
}

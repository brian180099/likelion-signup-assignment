import { useState } from 'react';

export default function Button({
  text,
  type = 'button',
  onClick,
  disabled = false,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    setIsClicked(true);
    window.setTimeout(() => setIsClicked(false), 260);
    onClick?.(event);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`button-primary ${isClicked ? 'button-clicked' : ''}`}
    >
      {text}
    </button>
  );
}

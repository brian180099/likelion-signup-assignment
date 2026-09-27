export default function Input({ label, type = 'text', placeholder, value, onChange, disabled = false, name, autoComplete }) {
  const isFilled = value.length > 0;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name} className="body-sm font-semibold text-neutral-500">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`input-field ${isFilled ? 'input-filled' : ''}`}
      />
    </div>
  );
}

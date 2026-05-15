const Button = ({
  label,
  onClick,
  isDisable,
}: {
  label: string;
  onClick: () => void;
  isDisable: boolean;
}) => {
  return (
    <div>
      <button onClick={onClick} disabled={isDisable}>
        {label}
      </button>
    </div>
  );
};

export default Button;

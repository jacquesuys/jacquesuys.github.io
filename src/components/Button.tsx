import { ButtonType } from "../types";

function Button({ children, className, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`${className} btn rounded-full capitalize text-sm text-white font-bold leading-4`}
    >
      {children}
    </button>
  );
}

export default Button;

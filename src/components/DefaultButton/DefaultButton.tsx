import { ButtonHTMLAttributes } from "react";
import strsToClass from "utils/classConverter";

export interface BasicButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  isActive = false,
  children,
  disabled,
  ...props
}) => {
  const base =
    "font-bold py-2 px-4 rounded-sm transition duration-100 ease-in-out w-6 ring-gray-100";

  const disabledStyle = disabled
    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
    : "bg-gray-100 opacity-70 text-gray-700 hover:bg-gray-100 active:bg-gray-200 active:opacity-100";

  const ActiveStyle = isActive ? "bg-gray-400 text-gray-900" : "bg-gray-200 opacity-100";

  return (
    <button
      className={strsToClass(base, disabledStyle, ActiveStyle)}
      disabled={disabled}
      {...props}
    >
      <div className="flex w-full h-full justify-center items-center">
        {children}
      </div>
    </button>
  );
};

export default BasicButton;

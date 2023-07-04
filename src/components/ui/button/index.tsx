import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  name?: string;
  disabled?: true | false;
  size?: "sm";
  variant?: string;
  onClick?: MouseEventHandler;
  innerRef?: any;
}

const Button = ({
  children,
  type,
  className,
  name,
  disabled,
  size,
  variant,
  onClick,
  innerRef,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      name={name}
      onClick={onClick}
      className={
        `flex items-center justify-center gap-2 px-4 py-2 ${
          size === "sm" ? "py-1 px-3 text-sm" : "text-md"
        } font-[500] ${
          variant == "outline"
            ? "bg-transparent border border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500"
            : variant == "secondary"
            ? "bg-gray-100 dark:bg-dark-700 dark:text-white text-[15px]"
            : "border border-primary-500 bg-primary-500 text-white hover:bg-primary-600"
        } rounded-md shadow-sm transition ` + className
      }
      ref={innerRef}
    >
      {children}
    </button>
  );
};

export default Button;

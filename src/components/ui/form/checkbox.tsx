import { ChangeEventHandler, useId } from "react";

// Types
interface Props {
  label?: string;
  name?: string;
  className?: string;
  value?: string;
  required?: true | false;
  disabled?: true | false;
  checked?: true | false;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({
  label,
  name,
  className,
  value,
  required,
  disabled,
  checked,
  onChange,
}: Props) => {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        className={
          className +
          " bg-gray-100 dark:bg-dark-700 px-4 py-2 text-[15px] rounded-md dark:text-white outline-none font-[400] pr-12"
        }
        required={required}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />

      {label ? (
        <label
          htmlFor={id}
          className="text-[14px] font-[400] block dark:text-white"
        >
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkbox;

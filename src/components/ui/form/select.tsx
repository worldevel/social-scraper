import { ChangeEventHandler, useId } from "react";

// Types
import { selectOptions } from "@/types/form";

interface Props {
  label?: string;
  labelRow?: true | false;
  name?: string;
  className?: string;
  required?: true | false;
  disabled?: true | false;
  options?: selectOptions[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({
  label,
  labelRow,
  name,
  className,
  required,
  disabled,
  options,
  onChange,
}: Props) => {
  const id = useId();

  return (
    <div className={labelRow ? "flex items-center gap-3" : ""}>
      {label ? (
        <label
          htmlFor={id}
          className={`text-[15px] font-[400] block dark:text-white ${
            !labelRow ? "mb-1" : ""
          }`}
        >
          {label}
        </label>
      ) : (
        ""
      )}

      <select
        id={id}
        name={name}
        className={
          className +
          " bg-gray-100 dark:bg-dark-700 px-4 py-2 text-[15px] rounded-md dark:text-white outline-none font-[400] pr-12"
        }
        required={required}
        disabled={disabled}
        onChange={onChange}
      >
        {options?.map((option: selectOptions, key: number) => (
          <option
            key={key}
            value={option.value}
            selected={option.selected}
            disabled={option.disabled}
            hidden={option.hidden}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

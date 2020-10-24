import React from "react";

interface Filter {
  title: string;
  options: string[];
  selected?: string;
  onChange: (option: string) => void;
  className?: string;
}

export const Filter: React.FC<Filter> = ({
  title,
  options,
  selected,
  onChange,
  className,
}) => {
  const changeOptionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className={className}
      onChange={changeOptionHandler}
      value={selected || ""}
    >
      <option value="">{title}</option>
      {options.map((opt) => {
        return (
          <option value={opt} key={`select-${title}-${opt}`}>
            {opt}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;

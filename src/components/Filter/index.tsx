import React from "react";

interface Filter {
  title: string;
  options: string[];
  selected?: string;
  onChange: (option: string) => void;
}

export const Filter: React.FC<Filter> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const changeOptionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={changeOptionHandler} value={selected || "default"}>
      <option value="default" disabled>
        {title}
      </option>
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

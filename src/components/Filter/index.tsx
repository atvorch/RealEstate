import React from "react";

interface Filter {
  title: string;
  options: string[];
  selectedOption?: string;
}

export const Filter: React.FC<Filter> = ({
  title,
  options,
  selectedOption,
}) => {
  return (
    <select>
      <option value={-1} selected>
        {title}
      </option>
      {options.map((opt) => {
        return (
          <option value={opt} selected={selectedOption === opt}>
            {opt}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;

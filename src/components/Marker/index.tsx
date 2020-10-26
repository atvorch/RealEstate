import React from "react";
import styled from "styled-components";

interface OwnProps {
  number: number;
  lat: string;
  lng: string;
  color: string;
  onClick: () => void;
  selected?: boolean;
}

const MarkerUI = styled.div<{ color: string; selected?: boolean }>`
  border-radius: 100%;
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 6px 6px #2fd4c9;
  }
  box-shadow: ${(props) => (props.selected ? "0 0 6px 6px #2fd4c9;" : "none")};
`;

export const Marker: React.FC<OwnProps> = ({
  number,
  onClick,
  color,
  selected,
}) => {
  return (
    <MarkerUI color={color} onClick={onClick} selected={selected}>
      {number}
    </MarkerUI>
  );
};

export default Marker;

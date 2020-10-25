import React from "react";
import styled from "styled-components";

interface OwnProps {
  number: number;
  lat: string;
  lng: string;
  color: string;
  onClick: () => void;
}

const MarkerUI = styled.div<{ color: string }>`
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
  &:hover {
    transform: scale(1);
  }
`;

export const Marker: React.FC<OwnProps> = ({ number, onClick, color }) => {
  return (
    <MarkerUI color={color} onClick={onClick}>
      {number}
    </MarkerUI>
  );
};

export default Marker;

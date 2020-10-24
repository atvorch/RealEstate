import React from "react";
import styled from "styled-components";

interface OwnProps {
  number: number;
  lat: string;
  lng: string;
  propertyId: number;
  color: string;
  onClick: (propertyId: number) => void;
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
`;

export const Marker: React.FC<OwnProps> = ({
  number,
  onClick,
  propertyId,
  color,
}) => {
  return (
    <MarkerUI color={color} onClick={() => onClick(propertyId)}>
      {number}
    </MarkerUI>
  );
};

export default Marker;

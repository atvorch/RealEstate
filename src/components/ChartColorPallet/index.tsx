import React from "react";
import { PROPERTY_COLORS } from "data/constants";
import { PROPERTY_TYPE } from "data/types";
import * as Styled from "./styled";

export const ChartColorPallet: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Styled.Wrapper className={className}>
      {Object.values(PROPERTY_TYPE).map((propType) => {
        return (
          <Styled.ColorWrapper
            key={`colorPallet-${propType}`}
            color={PROPERTY_COLORS[propType]}
          >
            <Styled.Color
              color={PROPERTY_COLORS[propType.toLocaleLowerCase()]}
            />
            <Styled.ColorTitle>{propType}</Styled.ColorTitle>
          </Styled.ColorWrapper>
        );
      })}
    </Styled.Wrapper>
  );
};

export default ChartColorPallet;

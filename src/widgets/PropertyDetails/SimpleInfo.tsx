import React from "react";
import * as Styled from "./styled";

interface Info {
  title: string;
  text: string;
}
const SimpleInfo: React.FC<Info> = ({ title, text }) => {
  return (
    <Styled.Info>
      <Styled.InfoTitle>{title}</Styled.InfoTitle>
      <Styled.InfoValue>{text}</Styled.InfoValue>
    </Styled.Info>
  );
};

export default SimpleInfo;

import device from "utils/devices";
import styled from "styled-components";

export const SelectPropertyMessage = styled.span`
  font-size: 20px;
  margin-top: 10px;
  cursor: default;

  @media ${device.desktop} {
    margin-top: 28px;
  }
`;

export const Wrapper = styled.article`
  order: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media ${device.tablet} {
    border: 1px dashed #3e88e469;
    border-width: 0 2px 0 0;
    padding-right: 20px;
    margin-right: 20px;
    margin: 0 20px 0 0;
    padding: 0 20px 0 0;
    order: initial;
    width: 300px;
    flex-shrink: 0;
  }
`;

export const Title = styled.h1`
  cursor: default;
  color: #3e88e4;
  @media ${device.desktop} {
    margin: 0 0 92px;
  }
`;

export const InfoTitle = styled.span`
  margin-bottom: 10px;
  color: #3e88e4;
  cursor: default;
`;
export const InfoValue = styled.span`
  color: black;
  cursor: default;
  text-transform: capitalize;
  font-size: 14px;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  background: lightgray;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 20px;
  }
`;
export const InfoInRow = styled.div`
  display: flex;
  margin: 20px 0;
  ${Info} + ${Info} {
    margin: 0 0 0 30px;
  }
`;

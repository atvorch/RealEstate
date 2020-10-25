import styled from "styled-components";

export const SelectPropertyMessage = styled.span`
  font-size: 20px;
  margin-top: 28px;
`;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px dashed #3e88e469;
  padding-right: 20px;
  margin-right: 20px;
  border-width: 0 2px 0 0;
`;

export const Title = styled.h1`
  cursor: default;
  color: #3e88e4;
  margin: 0 0 83px;
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

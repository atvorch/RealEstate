import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColorWrapper = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  }
`;

export const Color = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: ${(props) => props.color};
`;
export const ColorTitle = styled.span`
  cursor: default;
  white-space: nowrap;
`;

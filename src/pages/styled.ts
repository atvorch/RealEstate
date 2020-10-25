import ChartColorPallet from "components/ChartColorPallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 50px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
`;

export const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ColorPallet = styled(ChartColorPallet)`
  margin-left: 40px;
`;

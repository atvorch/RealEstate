import ChartColorPallet from "components/ChartColorPallet";
import styled from "styled-components";
import device from "utils/devices";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    padding: 20px 20px 20px 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    height: 100%;
    flex-grow: 1;
  }
`;

export const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.desktop} {
    flex-direction: row;
    padding-right: 30px;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  align-self: flex-end;
`;
export const ColorPallet = styled(ChartColorPallet)`
  display: none;
  @media ${device.largeMobile} {
    margin-left: 40px;
    display: flex;
  }
`;

import ChartColorPallet from "components/ChartColorPallet";
import styled from "styled-components";
import device from "utils/devices";

export const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  box-sizing: border-box;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - 40px);
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    width: calc(100% - 70px);
    margin: 20px 20px 20px 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
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
  flex-shrink: 0;

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

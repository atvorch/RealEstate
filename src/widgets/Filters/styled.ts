import styled from "styled-components";
import FilterUi from "components/Filter";
import device from "utils/devices";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;
export const FiltersWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;
export const Title = styled.span`
  color: #3e88e4;
  font-size: 24px;
  margin-bottom: 20px;

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;
export const Filter = styled(FilterUi)`
  height: 30px;
  width: 150px;
  padding: 0 10px;
  & + & {
    margin-top: 10px;
    @media ${device.desktop} {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`;

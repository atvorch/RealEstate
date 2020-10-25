import styled from "styled-components";
import FilterUi from "components/Filter";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FiltersWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
export const Title = styled.span`
  color: #3e88e4;
  font-size: 24px;
`;
export const Filter = styled(FilterUi)`
  height: 30px;
  width: 150px;
  padding: 0 10px;
  & + & {
    margin-left: 50px;
  }
`;

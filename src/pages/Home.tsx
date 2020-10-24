import React from "react";
import styled from "styled-components";
import properties from "store/modules/properties";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "store";
import { Property } from "data/types";
import Filters from "widgets/Filters";
import Map from "widgets/Map";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 100px;
  box-sizing: border-box;
`;

interface StateProps {
  properties: Property[];
}
const connector = connect(
  (state: RootState) => ({
    properties: properties.selectors.getProperties(state),
  }),
  {
    loadProperties: properties.actions.loadProperties,
  }
);

type ReduxProps = ConnectedProps<typeof connector>;

export const Main: React.FC<StateProps & ReduxProps> = ({
  properties,
  loadProperties,
}) => {
  React.useEffect(() => {
    if (properties) {
      loadProperties();
    }
  }, [loadProperties]);

  return (
    <Wrapper>
      <Filters />
      <Map />
    </Wrapper>
  );
};

export default connector(Main);

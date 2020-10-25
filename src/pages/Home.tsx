import React from "react";
import styled from "styled-components";
import properties from "store/modules/properties";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "store";
import { Property } from "data/types";
import Filters from "widgets/Filters";
import Map from "widgets/Map";
import PropertyDetails from "widgets/PropertyDetails";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 50px;
  box-sizing: border-box;
`;
export const ContentWrapper = styled.main`
  display: flex;
  height: 100%;
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
    if (!properties || !properties.length) {
      loadProperties();
    }
  }, [properties, loadProperties]);

  return (
    <Wrapper>
      <header>
        <Filters />
      </header>
      <ContentWrapper>
        <PropertyDetails />
        <Map />
      </ContentWrapper>
    </Wrapper>
  );
};

export default connector(Main);

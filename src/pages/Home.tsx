import React from "react";
import * as Styled from "./styled";
import properties from "store/modules/properties";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "store";
import { Property } from "data/types";
import Filters from "widgets/Filters";
import Map from "widgets/Map";
import PropertyDetails from "widgets/PropertyDetails";
import PropertiesChart from "widgets/PropertiesChart";

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
    <Styled.Wrapper>
      <PropertyDetails />
      <Styled.Content>
        <Styled.Header>
          <Filters />
          <Styled.ChartWrapper>
            <PropertiesChart />
            <Styled.ColorPallet />
          </Styled.ChartWrapper>
        </Styled.Header>
        <Map />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default connector(Main);

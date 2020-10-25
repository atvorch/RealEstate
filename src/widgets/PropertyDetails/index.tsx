import React from "react";
import * as Styled from "./styled";
import properties from "store/modules/properties";
import { RootState } from "store";
import { ConnectedProps, connect } from "react-redux";
import { STREET_VIEW_LINK_TEMPLATE } from "data/constants";

const connector = connect((state: RootState) => ({
  selectedProperty: properties.selectors.getSelectedProperty(state),
}));

type ReduxProps = ConnectedProps<typeof connector>;

export const PropertyDetails: React.FC<ReduxProps> = ({
  selectedProperty = {},
}) => {
  const { address, lat, lon } = selectedProperty;
  return (
    <Styled.Wrapper>
      <Styled.Title>Property Details</Styled.Title>
      <Styled.InfoTitle>{address}</Styled.InfoTitle>
      <Styled.Picture
        src={`${STREET_VIEW_LINK_TEMPLATE}&location=${lat},${lon}`}
      />
    </Styled.Wrapper>
  );
};

export default connector(PropertyDetails);

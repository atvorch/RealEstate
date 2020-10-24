import React from "react";
import * as Styled from "./styled";
import properties from "store/modules/properties";
import { RootState } from "store";
import { ConnectedProps, connect } from "react-redux";

const connector = connect((state: RootState) => ({
  selectedProperty: properties.selectors.getProperties(state),
}));

type ReduxProps = ConnectedProps<typeof connector>;

export const Marker: React.FC<ReduxProps> = ({
  selectedProperty: {
    address,
    sqm,
    price,
    propertyType,
    satelliteImage,
    baths,
    beds,
  },
}) => {
  // const { } = selectedProperty;
  return <Styled.Wrapper>{/* <Picture src={} /> */}</Styled.Wrapper>;
};

export default Marker;

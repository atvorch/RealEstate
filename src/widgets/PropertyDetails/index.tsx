import React from "react";
import * as Styled from "../../widgets/PropertyDetails/styled";
import { STREET_VIEW_LINK_TEMPLATE } from "data/constants";
import { Property } from "data/types";
import DETAILS_STRINGS from "./constants";
import properties from "store/modules/properties";
import { RootState } from "store";
import { ConnectedProps, connect } from "react-redux";
import SimpleInfo from "./SimpleInfo";

const connector = connect((state: RootState) => ({
  selectedProperty: properties.selectors.getSelectedProperty(state),
}));

type ReduxProps = ConnectedProps<typeof connector>;

export const PropertyDetails: React.FC<ReduxProps> = ({ selectedProperty }) => {
  if (!selectedProperty) {
    return (
      <Styled.Wrapper>
        <Styled.Title>{DETAILS_STRINGS.Title}</Styled.Title>
        <Styled.SelectPropertyMessage>
          Select Property for Details
        </Styled.SelectPropertyMessage>
      </Styled.Wrapper>
    );
  }

  const {
    propertyType,
    address,
    lat,
    lon,
    sqm,
    price,
    beds,
    baths,
  } = selectedProperty as Property;

  return (
    <Styled.Wrapper>
      <Styled.Title>{DETAILS_STRINGS.Title}</Styled.Title>
      <Styled.InfoTitle>{DETAILS_STRINGS.GoogleStreetView}</Styled.InfoTitle>
      <Styled.Picture
        src={`${STREET_VIEW_LINK_TEMPLATE}&location=${lat},${lon}`}
      />
      <Styled.InfoInRow>
        <SimpleInfo
          title={DETAILS_STRINGS.Beds}
          text={beds || DETAILS_STRINGS.NoInfo}
        />
        <SimpleInfo
          title={DETAILS_STRINGS.Baths}
          text={baths || DETAILS_STRINGS.NoInfo}
        />
      </Styled.InfoInRow>

      <SimpleInfo
        title={DETAILS_STRINGS.PropertyType}
        text={
          propertyType ? propertyType.toLowerCase() : DETAILS_STRINGS.NoInfo
        }
      />
      <SimpleInfo
        title={DETAILS_STRINGS.Address}
        text={address ? address.toLowerCase() : DETAILS_STRINGS.NoInfo}
      />
      <SimpleInfo
        title={DETAILS_STRINGS.Sqm}
        text={sqm || DETAILS_STRINGS.NoInfo}
      />
      <SimpleInfo
        title={DETAILS_STRINGS.Price}
        text={`€${price || DETAILS_STRINGS.NoInfo}`}
      />
    </Styled.Wrapper>
  );
};

export default connector(PropertyDetails);

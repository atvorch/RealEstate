import {
  PROPERTY_TYPE_OPTIONS,
  BATHS_OPTIONS,
  BEDS_OPTIONS,
} from "data/constants";
import React from "react";
import Filter from "components/Filter";
import styled from "styled-components";
import { RootState } from "store";
import filters from "store/modules/filters";
import { ConnectedProps, connect } from "react-redux";

const Wrapper = styled.div``;

const connector = connect(
  (state: RootState) => ({
    propertyType: filters.selectors.getPropertyType(state),
    bedroomsQuantity: filters.selectors.getBedroomsQuantity(state),
    bathroomsQuantity: filters.selectors.getBathroomsQuantity(state),
  }),
  {
    setPropertyType: filters.actions.setPropertyType,
    setBathroomsQuantity: filters.actions.setBathroomsQuantity,
    setBedroomsQuantity: filters.actions.setBedroomsQuantity,
  }
);

type ReduxProps = ConnectedProps<typeof connector>;

export const Filters: React.FC<ReduxProps> = ({
  propertyType,
  bedroomsQuantity,
  bathroomsQuantity,
  setPropertyType,
  setBathroomsQuantity,
  setBedroomsQuantity,
}) => {
  return (
    <Wrapper>
      <Filter
        title="Property Type"
        options={PROPERTY_TYPE_OPTIONS}
        onChange={setPropertyType}
        selected={propertyType}
      />
      <Filter
        title="Bedrooms"
        options={BATHS_OPTIONS}
        onChange={setBedroomsQuantity}
        selected={bedroomsQuantity}
      />
      <Filter
        title="Bathrooms"
        options={BEDS_OPTIONS}
        onChange={setBathroomsQuantity}
        selected={bathroomsQuantity}
      />
    </Wrapper>
  );
};

export default connector(Filters);

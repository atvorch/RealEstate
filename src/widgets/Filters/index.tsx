import {
  PROPERTY_TYPE_OPTIONS,
  BATHS_OPTIONS,
  BEDS_OPTIONS,
} from "data/constants";
import React from "react";
import Filter from "components/Filter";
import styled from "styled-components";

const Wrapper = styled.div``;

export const Filters: React.FC = () => {
  return (
    <Wrapper>
      <Filter title="Property Type" options={PROPERTY_TYPE_OPTIONS} />
      <Filter title="Bedrooms" options={BATHS_OPTIONS} />
      <Filter title="Bathrooms" options={BEDS_OPTIONS} />
    </Wrapper>
  );
};

export default Filters;

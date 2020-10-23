import React from "react";
import styled from "styled-components";
import properties from "store/modules/properties";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "store";
import { Property } from "types/common";
import Filters from "widgets/Filters";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
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
  }, [properties, loadProperties]);

  return (
    <Wrapper>
      <Filters />

      {properties &&
        properties.map((item: Property) => {
          return <span>{item.address}</span>;
        })}
    </Wrapper>
  );
};

export default connector(Main);

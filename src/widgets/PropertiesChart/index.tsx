import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import properties from "store/modules/properties";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "store";
import { PROPERTY_COLORS } from "data/constants";
import styled from "styled-components";

const connector = connect((state: RootState) => ({
  properties: properties.selectors.getProperties(state),
}));

type ReduxProps = ConnectedProps<typeof connector>;

const Chart = styled(PieChart)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

export const PropertiesChart: React.FC<ReduxProps> = ({ properties }) => {
  const data = React.useMemo(() => {
    const types = [...properties].map((props) =>
      props.propertyType.toLowerCase()
    );
    const data: { [key: string]: number } = {};

    types.forEach((propType) => {
      data[propType] = (data[propType] || 0) + 1;
    });

    return Object.keys(data).map((propType) => {
      return {
        title: propType,
        color: PROPERTY_COLORS[propType],
        value: data[propType],
      };
    });
  }, [properties]);

  return (
    <Chart
      data={data}
      totalValue={properties.length}
      label={({ dataEntry }) => dataEntry.value}
    />
  );
};

export default connector(PropertiesChart);

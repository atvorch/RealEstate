import React from "react";
import { RootState } from "store";
import { ConnectedProps, connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "components/Marker";
import properties from "store/modules/properties";
import { PROPERTY_COLORS, GOOGLE_MAPS_API_KEY } from "data/constants";
import * as Styled from "./styled";

const connector = connect(
  (state: RootState) => ({
    properties: properties.selectors.getProperties(state),
    filteredProperties: properties.selectors.getFilteredProperties(state),
    selectedPropertyId: properties.selectors.getSelectedPropertyId(state),
  }),
  {
    setSelectedPropertyId: properties.actions.setSelectedPropertyId,
  }
);

type ReduxProps = ConnectedProps<typeof connector>;
const DEFAULT_CENTER = { lat: -6.131429, lng: -6.26615527 };
const DEFAULT_ZOOM = 12;

export const Map: React.FC<ReduxProps> = ({
  properties,
  filteredProperties,
  selectedPropertyId,
  setSelectedPropertyId,
}) => {
  const googleApiOnLoadHandler = (map: any, maps: any) => {
    if (filteredProperties && filteredProperties.length) {
      const bounds = new maps.LatLngBounds();
      filteredProperties.forEach(({ lat, lon }) => {
        bounds.extend(new maps.LatLng(lat, lon));
      });
      map.fitBounds(bounds);
    }
  };

  return (
    <Styled.MapWrapper>
      <Styled.MessageWrapper
        isVisible={!!(properties.length && !filteredProperties.length)}
      >
        There is no properties that fits your filters
      </Styled.MessageWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
        onGoogleApiLoaded={({ map, maps }) => googleApiOnLoadHandler(map, maps)}
      >
        {filteredProperties.length
          ? filteredProperties.map((prop, index) => {
              return (
                <Marker
                  key={`marker-${prop.address}`}
                  lat={prop.lat}
                  lng={prop.lon}
                  onClick={() => setSelectedPropertyId(prop.address)}
                  number={index + 1}
                  color={PROPERTY_COLORS[prop.propertyType.toLowerCase()]}
                  selected={prop.address === selectedPropertyId}
                />
              );
            })
          : null}
      </GoogleMapReact>
    </Styled.MapWrapper>
  );
};

export default connector(Map);

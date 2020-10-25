import React from "react";
import { RootState } from "store";
import { ConnectedProps, connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "components/Marker";
import properties from "store/modules/properties";
import { PROPERTY_COLORS, GOOGLE_MAPS_API_KEY } from "data/constants";

const connector = connect(
  (state: RootState) => ({
    filteredProperties: properties.selectors.getFilteredProperties(state),
    selectedPropertyId: properties.selectors.getSelectedPropertyId(state),
  }),
  {
    setSelectedPropertyId: properties.actions.setSelectedPropertyId,
  }
);

type ReduxProps = ConnectedProps<typeof connector>;

const DUBLIN_GEPOSITION = { lat: 53.35014, lng: -6.266155 };
const DEFAULT_ZOOM = 12;

export const Map: React.FC<ReduxProps> = ({
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
    <div style={{ flexGrow: 1, width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={DUBLIN_GEPOSITION}
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
    </div>
  );
};

export default connector(Map);

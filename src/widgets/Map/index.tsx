import React from "react";
import { RootState } from "store";
import filters from "store/modules/filters";
import { ConnectedProps, connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "components/Marker";
import properties from "store/modules/properties";
import { uniqueId } from "lodash";
import { Property } from "data/types";
import { filterProperties } from "./utils";
import { PropertyColors, GOOGLE_MAPS_API_KEY } from "data/constants";

const connector = connect(
  (state: RootState) => ({
    properties: properties.selectors.getProperties(state),
    propertyType: filters.selectors.getPropertyType(state),
    bedroomsQuantity: filters.selectors.getBedroomsQuantity(state),
    bathroomsQuantity: filters.selectors.getBathroomsQuantity(state),
  }),
  {
    setSelectedPropertyId: properties.actions.setSelectedPropertyId,
  }
);

type ReduxProps = ConnectedProps<typeof connector>;

const DUBLIN_GEPOSITION = { lat: 53.35014, lng: -6.266155 };
const DEFAULT_ZOOM = 12;

export const Map: React.FC<ReduxProps> = ({
  properties,
  propertyType,
  bedroomsQuantity,
  bathroomsQuantity,
  setSelectedPropertyId,
}) => {
  const map = React.useRef<any>(null);
  const [center, setCenter] = React.useState(DUBLIN_GEPOSITION);

  const fitProperties = React.useMemo(
    () =>
      filterProperties(
        properties,
        propertyType,
        bedroomsQuantity,
        bathroomsQuantity
      ),
    [properties, propertyType, bedroomsQuantity, bathroomsQuantity]
  );

  const googleApiOnLoadHandler = (map: any, maps: any) => {
    if (fitProperties && fitProperties.length) {
      const bounds = new maps.LatLngBounds();
      properties.forEach(({ lat, lon }) => {
        bounds.extend(new maps.LatLng(lat, lon));
      });
      setCenter(bounds.getCenter());
    }
  };

  React.useEffect(() => {
    if (!fitProperties.length || !map.current || !map.current.maps_) {
      return;
    }

    const bounds = new map.current.maps_.LatLngBounds();
    fitProperties.forEach(({ lat, lon }) => {
      bounds.extend(new map.current.maps_.LatLng(lat, lon));
    });
    map.current.map_.fitBounds(bounds);
  }, [fitProperties, map.current]);

  return (
    <div style={{ flexGrow: 1, width: "100%" }}>
      <GoogleMapReact
        ref={map}
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={DUBLIN_GEPOSITION}
        defaultZoom={DEFAULT_ZOOM}
        onGoogleApiLoaded={({ map, maps }) => googleApiOnLoadHandler(map, maps)}
      >
        {fitProperties.length
          ? fitProperties.map((prop, index) => {
              return (
                <Marker
                  key={uniqueId("marker")}
                  lat={prop.lat}
                  lng={prop.lon}
                  onClick={() => setSelectedPropertyId(prop.address)}
                  number={index + 1}
                  color={PropertyColors[prop.propertyType.toLowerCase()]}
                />
              );
            })
          : null}
      </GoogleMapReact>
    </div>
  );
};

export default connector(Map);

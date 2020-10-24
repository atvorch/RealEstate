import { Property } from "data/types";

export const filterProperties = (
  properties: Property[] = [],
  propertyType = "",
  bedroomsQuantity = "",
  bathroomsQuantity = ""
) => {
  let filteredProperties: Property[] = [...properties];

  if (propertyType) {
    filteredProperties = filteredProperties.filter(
      (prop) =>
        prop.propertyType.toLocaleLowerCase() ===
        propertyType.toLocaleLowerCase()
    );
  }

  if (bedroomsQuantity) {
    filteredProperties = filteredProperties.filter(
      (prop) => prop.beds === bedroomsQuantity
    );
  }

  if (bathroomsQuantity) {
    filteredProperties = filteredProperties.filter(
      (prop) => prop.baths === bathroomsQuantity
    );
  }

  return filteredProperties;
};

export enum PROPERTY_TYPE {
  Apartment = "Apartment",
  Terraced = "Terraced",
  Detached = "Detached",
  SemiDetached = "Semi-detached",
}

export interface Property {
  address: string;
  lat: string;
  lon: string;
  sqm: string;
  price: string;
  propertyType: PROPERTY_TYPE;
  satelliteImage: string;
  baths: string;
  beds: string;
}

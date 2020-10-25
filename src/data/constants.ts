import { PROPERTY_TYPE } from "./types";

export const PROPERTY_TYPE_OPTIONS = Object.values(PROPERTY_TYPE);

export const PropertyColors = {
  [PROPERTY_TYPE.Apartment.toLowerCase()]: "gray",
  [PROPERTY_TYPE.Terraced.toLowerCase()]: "green",
  [PROPERTY_TYPE.Detached.toLowerCase()]: "red",
  [PROPERTY_TYPE.SemiDetached.toLowerCase()]: "orange",
} as const;

export const BEDS_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
export const BATHS_OPTIONS = ["1", "2", "3", "4", "5", "6"] as const;

export default {
  PROPERTY_TYPE_OPTIONS,
  BEDS_OPTIONS,
  BATHS_OPTIONS,
};

export const GOOGLE_MAPS_API_KEY = "AIzaSyDCMkF1zGMrDg0wIKFLzBoCp6tTibJQ7-k";

export const STREET_VIEW_LINK_TEMPLATE =
  "https://maps.googleapis.com/maps/api/streetview?fov=80&heading=70&pitch=0&key=AIzaSyDCMkF1zGMrDg0wIKFLzBoCp6tTibJQ7-k&size=400x400";

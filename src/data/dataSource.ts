import { Property } from "data/types";
import Papa from 'papaparse';

const PROPERTIES_CSV_PATH = "data.csv";

const readFromFile = (filePath: string): Promise<void | Property[]> => {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text().then(text => {
        const result = Papa.parse<Property>(text, {header: true});
        return result.data;
      });
    })
    .catch((error) => console.error(error));
};

const loadProperties = (): Promise<void | Property[]> => readFromFile(PROPERTIES_CSV_PATH);

export default {
  loadProperties
};

import { RootState } from "store";
import { Reducer } from "redux";
import { Property } from "data/types";
import { ThunkAction } from "redux-thunk";
import dataSource from "data/dataSource";
import filters from "store/modules/filters";

import { filterProperties } from "../properties/utils";

export interface PropertiesState {
  properties: Property[];
  selectedPropertyId: string;
}

const defaultState: PropertiesState = {
  properties: [],
  selectedPropertyId: "",
};

const Actions = {
  setProperties: "propertiesModule/setProperties",
  setSelectedPropertyId: "propertiesModule/setSelectedPropertyId",
} as const;

interface SetProperties {
  type: typeof Actions.setProperties;
  payload: Property[];
}
interface SetSelectedPropertyId {
  type: typeof Actions.setSelectedPropertyId;
  payload: string;
}

type Actions = SetProperties | SetSelectedPropertyId;

const reducer: Reducer<PropertiesState, Actions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case Actions.setProperties: {
      return {
        ...state,
        properties: action.payload,
      };
    }
    case Actions.setSelectedPropertyId: {
      return {
        ...state,
        selectedPropertyId: action.payload,
      };
    }

    default:
      return state;
  }
};

//============== SELECTORS ================

const getLocalState = (state: RootState): PropertiesState => state.properties;
const getProperties = (state: RootState) => getLocalState(state).properties;
const getFilteredProperties = (state: RootState) => {
  const filteredProperties = filterProperties(
    getProperties(state),
    filters.selectors.getAllFilters(state)
  );
  return filteredProperties;
};
const getSelectedPropertyId = (state: RootState) =>
  getLocalState(state).selectedPropertyId;

const getSelectedProperty = (state: RootState) => {
  const localState = getLocalState(state);
  return localState.properties.find(
    (prop) => prop.address === localState.selectedPropertyId
  );
};

//============== ACTIONS ================
export type ThunkResult<R> = ThunkAction<R, RootState, void, Actions>;

const setProperties = (properties: Property[]): ThunkResult<void> => (
  dispatch
) => {
  dispatch({
    type: Actions.setProperties,
    payload: properties,
  });
};

const setSelectedPropertyId = (id: string): ThunkResult<void> => (dispatch) => {
  dispatch({
    type: Actions.setSelectedPropertyId,
    payload: id,
  });
};

const loadProperties = (): ThunkResult<Promise<void>> => (dispatch) => {
  return dataSource.loadProperties().then(
    (data) => {
      if (data) {
        dispatch(setProperties(data));
      }
    },
    (error) => {
      console.error(error);
    }
  );
};

const refreshSelectedProperty = (): ThunkResult<void> => (dispatch, state) => {
  const filtered = getFilteredProperties(state());
  const selectedId = getSelectedPropertyId(state());
  if (selectedId && !filtered.some((prop) => prop.address === selectedId)) {
    dispatch(setSelectedPropertyId(""));
  }
};

export default {
  reducer,
  actions: {
    loadProperties,
    setSelectedPropertyId,
    refreshSelectedProperty,
  },
  selectors: {
    getProperties,
    getFilteredProperties,
    getSelectedProperty,
    getSelectedPropertyId,
  },
};

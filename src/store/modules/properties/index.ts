import { RootState } from "store";
import { Reducer } from "redux";
import { Property } from "types/common";
import { ThunkAction } from "redux-thunk";
import dataSource from 'data/dataSource';

export interface PropertiesState {
  properties: Property[];
}

const defaultState: PropertiesState = {
    properties: [],
};

const Actions = {
  setProperties: "propertiesModule/setProperties",
} as const;

interface SetCurrencyRate {
  type: typeof Actions.setProperties;
  payload: Property[];
}

type Actions = SetCurrencyRate;

const reducer: Reducer<PropertiesState, Actions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case Actions.setProperties: {
      return {
        properties: action.payload,
      };
    }

    default:
      return state;
  }
};

//============== SELECTORS ================

const getLocalState = (state: RootState) => state.properties;
const getProperties = (state: RootState) => getLocalState(state).properties;

//============== ACTIONS ================
export type ThunkResult<R> = ThunkAction<R, RootState, void, Actions>;

const setProperties = (properties: Property[]): ThunkResult<void> => (
  dispatch
) => {
  dispatch({
    type: Actions.setProperties,
    payload: properties
  });
};

const loadProperties = (): ThunkResult<Promise<void>> => (dispatch) => {
  return dataSource.loadProperties().then(
    (data) => {
      if(data) {
        dispatch(
          setProperties(data),
        );
      }
    },
    (error) => {
      console.error(error);
    },
  );
}

export default {
  reducer,
  actions: {
    loadProperties
  },
  selectors: {
    getProperties
  }
};

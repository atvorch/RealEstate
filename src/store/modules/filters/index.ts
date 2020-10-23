import { RootState } from "store";
import { Reducer } from "redux";
import { Property } from "types/common";
import { ThunkAction } from "redux-thunk";
import dataSource from "data/dataSource";

export interface FiltersState {
  propertyType: string;
  bedroomsQuantity: number | null;
  bathroomsQuantity: number | null;
}

const defaultState: FiltersState = {
  propertyType: "",
  bedroomsQuantity: null,
  bathroomsQuantity: null,
};

const Actions = {
  setPropertyType: "filtersModule/setProperyType",
  setBedroomsQuantity: "filtersModule/setBedroomsQuantity",
  setBathroomsQuantity: "filtersModule/setBathroomsQuantity",
} as const;

interface SetPropertyType {
  type: typeof Actions.setPropertyType;
  payload: string;
}

interface SetBedroomsQuantity {
  type: typeof Actions.setBedroomsQuantity;
  payload: number;
}

interface SetBathroomsQuantity {
  type: typeof Actions.setBathroomsQuantity;
  payload: number;
}

type Actions = SetPropertyType | SetBedroomsQuantity | SetBathroomsQuantity;

const reducer: Reducer<FiltersState, Actions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case Actions.setPropertyType: {
      return {
        ...state,
        propertyType: action.payload,
      };
    }
    case Actions.setBedroomsQuantity: {
      return {
        ...state,
        bedroomsQuantity: action.payload,
      };
    }
    case Actions.setBathroomsQuantity: {
      return {
        ...state,
        bathroomsQuantity: action.payload,
      };
    }
    default:
      return state;
  }
};

//============== SELECTORS ================

const getLocalState = (state: RootState) => state.filters;
const getPropertyType = (state: RootState) => getLocalState(state).propertyType;
const getBedroomsQuantity = (state: RootState) =>
  getLocalState(state).bedroomsQuantity;
const getBathroomsQuantity = (state: RootState) =>
  getLocalState(state).bathroomsQuantity;

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

export default {
  reducer,
  actions: {
    loadProperties,
  },
  selectors: {
    getProperties,
  },
};

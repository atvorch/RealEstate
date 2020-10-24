import { RootState } from "store";
import { Reducer } from "redux";
import { Property } from "data/types";
import { ThunkAction } from "redux-thunk";
import dataSource from "data/dataSource";

export interface FiltersState {
  propertyType: string;
  bedroomsQuantity: string;
  bathroomsQuantity: string;
}

const defaultState: FiltersState = {
  propertyType: "",
  bedroomsQuantity: "",
  bathroomsQuantity: "",
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
  payload: string;
}

interface SetBathroomsQuantity {
  type: typeof Actions.setBathroomsQuantity;
  payload: string;
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

const setPropertyType = (propertyType: string): ThunkResult<void> => (
  dispatch
) => {
  dispatch({
    type: Actions.setPropertyType,
    payload: propertyType,
  });
};
const setBedroomsQuantity = (bedroomsQuantity: string) => (dispatch: any) => {
  dispatch({
    type: Actions.setBedroomsQuantity,
    payload: bedroomsQuantity,
  });
};

const setBathroomsQuantity = (bathroomsQuantity: string) => (dispatch: any) => {
  dispatch({
    type: Actions.setBathroomsQuantity,
    payload: bathroomsQuantity,
  });
};
export default {
  reducer,
  actions: {
    setPropertyType,
    setBedroomsQuantity,
    setBathroomsQuantity,
  },
  selectors: {
    getPropertyType,
    getBedroomsQuantity,
    getBathroomsQuantity,
  },
};

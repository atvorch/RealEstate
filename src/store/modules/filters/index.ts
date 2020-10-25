import { RootState } from "store";
import { Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import properties from "store/modules/properties";
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

const getAllFilters = (state: RootState): FiltersState => {
  return getLocalState(state);
};
//============== ACTIONS ================
export type ThunkResult<R> = ThunkAction<R, RootState, void, Actions>;

const setPropertyType = (propertyType: string): ThunkResult<void> => (
  dispatch
) => {
  dispatch({
    type: Actions.setPropertyType,
    payload: propertyType,
  });
  dispatch(properties.actions.refreshSelectedProperty());
};

const setBedroomsQuantity = (bedroomsQuantity: string) => (dispatch: any) => {
  dispatch({
    type: Actions.setBedroomsQuantity,
    payload: bedroomsQuantity,
  });
  dispatch(properties.actions.refreshSelectedProperty());
};

const setBathroomsQuantity = (bathroomsQuantity: string) => (dispatch: any) => {
  dispatch({
    type: Actions.setBathroomsQuantity,
    payload: bathroomsQuantity,
  });
  dispatch(properties.actions.refreshSelectedProperty());
};

export default {
  reducer,
  actions: {
    setPropertyType,
    setBedroomsQuantity,
    setBathroomsQuantity,
  },
  selectors: {
    getAllFilters,
    getPropertyType,
    getBedroomsQuantity,
    getBathroomsQuantity,
  },
};

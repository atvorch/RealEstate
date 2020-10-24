import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import properties, { PropertiesState } from "./modules/properties";
import filters, { FiltersState } from "./modules/filters";
import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";

export interface RootState {
  properties: PropertiesState;
  filters: FiltersState;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  properties: properties.reducer,
  filters: filters.reducer,
});

export function initStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

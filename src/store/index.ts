import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import properties from './modules/properties';
import filters from './modules/filters';

export const rootReducer: any = combineReducers({
  properties: properties.reducer,
  filters: filters.reducer
});

export function initStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

export type RootState = ReturnType<typeof rootReducer>;

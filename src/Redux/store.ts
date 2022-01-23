import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import filmCatalog from "./filmCatalog-reducer";
import filemInformationReducer from "./filmeIformation-reducer";
import filmProfileReducer from "./filmProfile-reducer";

import profileReducer from "./profile-reducer";
import uploadFilmReducer from "./uploadFilm-reducer";

export let rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  filmProfile: filmProfileReducer,
  uploadFilm:uploadFilmReducer,
  filemInformation:  filemInformationReducer,
  filmsCatalog: filmCatalog

});

let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

type rootReducersType = typeof rootReducers;

export type AppStateType = ReturnType<rootReducersType>;
//@ts-ignore
window.store = store;

export default store;
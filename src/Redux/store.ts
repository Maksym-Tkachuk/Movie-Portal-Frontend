import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import filmCatalog from "./filmCatalog-reducer";
import filmProfileReducer from "./filmProfile-reducer";
import filmSearchReducer from "./filmSearch-reducer";

import profileReducer from "./profile-reducer";
import uploadFilmReducer from "./uploadFilm-reducer";

export let rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  filmProfile: filmProfileReducer,
  uploadFilm: uploadFilmReducer,
  filmsCatalog: filmCatalog,
  filmSearch:filmSearchReducer
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

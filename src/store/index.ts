import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Store
} from "redux";
import reduxThunk from "redux-thunk";
import { Thing } from "./things/model/thing";
import { ThingsReducer } from "./things/reducer";

//Thing has name: string; id: string, children: ChildThing[]
//ChildThing has name: string, id: string

export interface AppState {
  things: Thing[];
}

export default function configureStore(): Store<AppState, any> {
  const reducers = {
    things: ThingsReducer
  };

  const state = combineReducers<AppState>({
    ...reducers
  });

  const store = createStore(state, compose(applyMiddleware(reduxThunk)));

  return store;
}

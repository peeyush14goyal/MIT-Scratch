import { combineReducers } from "redux";
import { characterReducer } from "./character/characterReducer";
import { eventReducer } from "./events/eventReducer";
import { listReducer } from "./midarea/list";

export const rootReducer = combineReducers({
  character: characterReducer,
  list: listReducer,
  event: eventReducer,
});

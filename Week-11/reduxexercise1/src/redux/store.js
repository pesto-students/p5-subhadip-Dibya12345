import  createStore  from "redux";
import { stepReducer } from "./reducer";

export const store = createStore(stepReducer);

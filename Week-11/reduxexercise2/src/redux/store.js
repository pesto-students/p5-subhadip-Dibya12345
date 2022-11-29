import { createStore } from "redux";
import { lightReducer } from "./reducer";

export const store = createStore(lightReducer);
import { rootreducer } from "./Redux/index";
import { createStore } from "redux";

export const store = createStore(rootreducer);
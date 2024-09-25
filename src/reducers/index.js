import {combineReducers} from "redux";
import testimonicalsReducer from './testimonicals'

const allReducers = combineReducers({
    testimonicalsReducer,
});

export default allReducers;
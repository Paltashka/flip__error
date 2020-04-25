import {combineReducers} from "redux";

import states from "./states";
import products from "./products";
import categories from "./categories";
import info from "./info";
import lang from "./lang";
import currentPage from './currentPage';

export default combineReducers({
    states,
    products,
    categories,
    info,
    lang,
    currentPage
});

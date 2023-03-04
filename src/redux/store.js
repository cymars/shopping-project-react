

import { createStore,combineReducers } from "redux";
import { productReducer , selectedProductReducer} from "./reducers/productReducer";


const rootReducer=combineReducers({
    allProducts:   productReducer,
    product: selectedProductReducer
});

const store=createStore(rootReducer)

export default store
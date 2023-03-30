import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer";


const reducer =combineReducers({
    restaurantReducer:homeReducer    

})
console.log('hi');
console.log(reducer.restaurantReducer);
const middleware=[thunk]

const store=createStore(reducer,applyMiddleware(...middleware))

export default store


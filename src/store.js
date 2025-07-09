import{legacy_createStore as createStore, combineReducers} from 'redux'
import reducer from "./reducer";
import reducer1 from './reducer1';
const combineReducer=combineReducers({reducer,reducer1})

const reduxStore= createStore(combineReducer)

export default reduxStore;
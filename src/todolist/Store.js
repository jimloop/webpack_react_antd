import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';
import counterReducer from '../components/react_redux/Reducer';
import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    counter:counterReducer
});

const middlewares = [];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer,{}, storeEnhancers);
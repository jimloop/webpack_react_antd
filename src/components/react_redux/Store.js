import {createStore} from 'redux';
import Reducer from './Reducer';

const initValues={
    'First':0,
    'Second':10,
    'Third':30
};

const store = createStore(Reducer,initValues);

export default store;
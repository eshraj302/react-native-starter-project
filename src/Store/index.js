import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './Reducers';
import { persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
    key: "root",
    blacklist: [],
    storage: AsyncStorage
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
    return store.getState();
};

export {
    getStore,
    getState,
    getPersistor
};
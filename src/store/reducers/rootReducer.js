import productReducer from "./productReducer";
import userReducer from "./userReducer";
import activePageReducer from '../slice/activePage'
import statisticsReducer from '../slice/statisticsSlice'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    activePage:  activePageReducer,
    statistics:  statisticsReducer
})

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const adminPersistConfig = {
    ...persistCommonConfig,
    key: 'admin',
    whitelist: ['isLoggedIn', 'adminInfo']
}
const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
}
export default rootReducer;
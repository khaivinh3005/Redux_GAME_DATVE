import { combineReducers, createStore } from "redux";

import { BTOanTuXIReducer } from "./BTOanTuXiReducer";

import DatVeXemPhimReducer from "./DatVeXemPhimReducer";

// store tổng cho ứng dụng
export const rootReducer = combineReducers({
    BTOanTuXIReducer,
    DatVeXemPhimReducer

    
})

export const store = createStore(rootReducer)

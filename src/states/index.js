import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import usersReducer from "./users/reducer";
import talksReducer from "./talks/reducer";
import talkDetailReducer from "./talkDetail/reducer";

/**
 * @TODO: Create Redux store
 */
const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
  },
});

export default store;

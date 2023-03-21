import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./redux/languageSlice";
import themeReducer from "./redux/themeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
    },
});
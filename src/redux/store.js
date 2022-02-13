import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./features/courseSlice";


export default configureStore({
    reducer : {
        courses : courseSlice,
    }
})
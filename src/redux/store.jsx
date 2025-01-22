import {configureStore} from '@reduxjs/toolkit';
import taskSlice from '../Task/taskSlice'

export const store = configureStore({
    reducer:{
        task: taskSlice,
    },
})
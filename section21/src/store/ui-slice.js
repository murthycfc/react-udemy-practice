import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        show: false,
        notification: null
    },
    reducers:{
        toggle(state){
            state.show = !state.show;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message : action.payload.message
            }
        }
    }
})

export default uiSlice;
export const uiActions = uiSlice.actions;



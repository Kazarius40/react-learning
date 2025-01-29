import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json());
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(users);
            // throw new Error();
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error loading users');
        }
    }
);

export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {

        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json());
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(user);
            // throw new Error();
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Some Error');
        }
    }
);
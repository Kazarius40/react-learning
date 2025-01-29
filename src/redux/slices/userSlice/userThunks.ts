import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUserById, fetchUsers} from "./userApi.ts";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await fetchUsers()
            return thunkAPI.fulfillWithValue(users);
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
            const user = await fetchUserById(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Some Error');
        }
    }
);
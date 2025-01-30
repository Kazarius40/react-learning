import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUser} from "./userApi.ts";
import {IUser} from "../../../models/user/IUser.ts";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users: IUser[] = await fetchUser();
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
            const user: IUser = await fetchUser(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Some Error');
        }
    }
);
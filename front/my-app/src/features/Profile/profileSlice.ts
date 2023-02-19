import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Icred from '../../models/cred';
import { addprofile, getprofile, updprofile} from './profileAPI';
import jwt_decode from "jwt-decode";
import Iprof from '../../models/profile';

export interface LoginState {
  refreshflag : boolean
 profile :Iprof []
}

const initialState: LoginState = {
  profile: [],
  refreshflag: false
};

export const getprofileAsync = createAsyncThunk(
  'profile/getprofile',
  async (access : any) => {

    const response = await getprofile(access);

    return response.data;
  }
);


export const addprofileAsync = createAsyncThunk(
  'profile/addprofile',
  async (prof : Iprof) => {
    // console.log(prof)
    const response = await addprofile(prof);
    return response.data;
  }
);

export const updprofileasync = createAsyncThunk(
  'profile/updprofile',
  async (prof : Iprof) => {
    // console.log(prof)
    const response = await updprofile(prof);
    return response.data;
  }
);


// export const loginAsync = createAsyncThunk(
//   'login/login',
//   async (cred: Icred) => {
//     const response = await login(cred);
//     return response.data;
//   }
// );

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
   
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(getprofileAsync.fulfilled, (state, action) => {
      state.profile = action.payload
      console.log(state.profile)
       
       })
      .addCase(addprofileAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.profile.push(action.payload)
        state.refreshflag = ! state.refreshflag

       })
       .addCase(updprofileasync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.refreshflag = ! state.refreshflag

        })

  },
});

export const {  } = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile.profile;
export const selectRefresh = (state: RootState) => state.profile.refreshflag;


export default profileSlice.reducer;

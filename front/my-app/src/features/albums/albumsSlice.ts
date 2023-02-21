import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access, stat } from 'fs';
import { RootState, AppThunk } from '../../app/store';
import { IImage } from '../../models/gallery';
import { getalbums } from './albumsAPI';


export interface AlbumsState {
  albums : []
  albumstype : []
  refresh : string
 
 }
 
 const initialState: AlbumsState = {
   albums: [],
   albumstype: [],
   refresh: '',

 };

export const getalbumsAsync = createAsyncThunk(
  'albums/getalbums',
 
  async (access: string) => {
   
    const response = await getalbums(access);
    console.log(response)
    return response.data;
  }
);

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getalbumsAsync.fulfilled, (state, action) => {
       
        // state.images = action.payload
        // console.log(state.images )
      })

      
  },
});

export const {  } = albumsSlice.actions;
export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectAlbumsType = (state: RootState) => state.albums.albumstype;
export const selectRefresh = (state: RootState) => state.albums.refresh;

export default albumsSlice.reducer;

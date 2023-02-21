import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access, stat } from 'fs';
import { RootState, AppThunk } from '../../app/store';
import { IImage } from '../../models/gallery';
import { getimages, addimages, delimages, updimages } from './albumsAPI';



export interface GalleryState {
  images: IImage[];
  refreshflag : boolean
 
}

const initialState: GalleryState = {
  images: [],
  refreshflag: true

};

export const getimagesAsync = createAsyncThunk(
  'gallery/getimages',
 
  async (access: string) => {
   
    const response = await getimages(access);
    return response.data;
  }
);
export const addimagesAsync = createAsyncThunk(
  'gallery/addimages',
  async (newimage:any) => {
    // console.log(newimage.access)
    const response = await addimages(newimage);
    return response;
  }
);

export const delimagesAsync = createAsyncThunk(
  'gallery/delimages',
  async (credid: any) => {
    console.log(credid)
    const response = await delimages(credid);
    return response.data;
  }
);

export const updimagesAsync = createAsyncThunk(
  'gallery/updimages',
  async (updimage: any) => {
    // console.log(updimage)
    const response = await updimages(updimage);
    // console.log(response)
    return response.data;
  }
);
export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getimagesAsync.fulfilled, (state, action) => {
       
        state.images = action.payload
        console.log(state.images )
      })
      .addCase(addimagesAsync.fulfilled, (state, action) => {
       
        // state.images.push( action.payload)
        // console.log(action.payload )
        state.refreshflag = ! state.refreshflag
   
      })
      .addCase(delimagesAsync.fulfilled, (state, action) => {
        state.images.filter(img=> action.payload !== img.id)
        console.log(state.images)
        state.refreshflag = ! state.refreshflag

      })
      .addCase(updimagesAsync.fulfilled, (state, action) => {
        state.refreshflag = ! state.refreshflag
     

      });
      
  },
});

export const {  } = gallerySlice.actions;
export const selectImages = (state: RootState) => state.gallery.images;
export const selectRefresh = (state: RootState) => state.gallery.refreshflag;
export default gallerySlice.reducer;

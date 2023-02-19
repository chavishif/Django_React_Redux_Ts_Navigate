import React, { useState } from 'react';
import {selectAccess} from '../features/login/loginSlice';
import { IImage } from '../models/gallery';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addimagesAsync, updimagesAsync } from '../features/gallery/gallerySlice';



interface Iaddtogallery {
  updid: number;
}


export const AddToGallery: React.FC<Iaddtogallery> = (props: any) => {
  // const images = useAppSelector(selectImages);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File>();
  const access = useAppSelector(selectAccess);
  const dispatch = useAppDispatch();
  const updid = props.updid


  const handleSubmitUpdate = (event: any) => {
    event.preventDefault();
    buildupdateImage(updid, title, description, image);
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    buildImage(title, description, image);
  };

  //  FormData is a way to construct a set of key/value pairs
  //  representing form fields and their values, which can be sent to server using the fetch()
  const buildImage = (title: string, description: string, image: any, ) => {
    let form_data = new FormData();
    form_data.append("image", image, image.name)
    form_data.append("title", title);
    form_data.append("description", description);
    dispatch(addimagesAsync({form_data, access}));
  };


  const buildupdateImage = (updid: number, title: string, description: string, image: any) => {
    let form_data = new FormData();
    form_data.append("image", image, image.name)
    form_data.append("title", title);
    form_data.append("description", description);
    dispatch(updimagesAsync({ form_data, updid, access }));
  };

  const handleImageChange = (event: any) => {
    event.preventDefault();
    let file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    }
  }

  return (
    <div>
      <h1>{updid}</h1>
      <form>
        Add to gallery:<br />
        {/* <p>Received ID: {props && props.id}</p> */}
        Title: <input onChange={(e) => setTitle(e.target.value)} />
        <br />
        Description: <input onChange={(e) => setDescription(e.target.value)} />
        <br />
        Image: <input type="file" onChange={handleImageChange} />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Send</button>
        <button onClick={(e) => handleSubmitUpdate(e)}>Send update</button>
      </form>
    </div>
  );
}

// export default AddToGallery



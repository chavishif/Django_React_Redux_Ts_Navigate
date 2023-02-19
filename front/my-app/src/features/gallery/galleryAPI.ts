import axios from "axios";
import { MY_SERVER } from "../../env";
import { IImage } from "../../models/gallery";
import jwt_decode from "jwt-decode";



export function getimages(access : string) {
  return new Promise<{data:IImage[]}>((resolve) => {
    axios.get(MY_SERVER , {
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
    .then(res => resolve({ data: res.data }))
  });
}



export function addimages(newImage: any) {
  let decoded: any = jwt_decode(newImage.access);
  newImage.form_data.append("user", decoded.user_id)
  // console.log(newImage.form_data.get("user"))
  // console.log(newImage.access)
   return new Promise((resolve, reject) => {
    axios.post(MY_SERVER, newImage.form_data,
     { 
      headers: {
        'Authorization': `Bearer ${newImage.access}`
      }
    })
    .then(res => resolve({ data: res.data }))
    .catch(err => reject(err));
  });
}



export function delimages(credid : any) {
  return new Promise<{data: any}>((resolve) => {
    axios.delete(MY_SERVER + credid.id, {
      headers: {
        'Authorization': `Bearer ${credid.access}`
      }
    })
    .then(res => resolve({ data: res.data }))
  });
}



export function updimages(updimage : any) {
  return new Promise<{data: any}>((resolve) => {
    axios.put(MY_SERVER + updimage.updid, updimage.form_data ,{
      headers: {
        'Authorization': `Bearer ${updimage.access}`
      }
    })
    .then(res => resolve({ data: res.data }))
  });
}


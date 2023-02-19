import Icred from "../../models/cred";
import axios from "axios"
import jwt_decode from "jwt-decode";
import Iprof from "../../models/profile";

const MY_SERVER = "http://127.0.0.1:8000/profile/"




export function addprofile(profile: Iprof) {
  let decoded: any = jwt_decode(profile.access);
  // console.log( decoded.user_id)
   return new Promise<{data : Iprof}>((resolve, reject) => {
    axios.post(MY_SERVER, {bio: profile.bio, 
      location: profile.location,
      birth_date: profile.birth_date,
      user: decoded.user_id}, 
     { 
      headers: {
        'Authorization': `Bearer ${profile.access}`
      }
    })
    .then(res => resolve({ data: res.data }))
    .catch(err => reject(err));
  });
}


export function updprofile(profile: Iprof) {
  let decoded: any = jwt_decode(profile.access);
   return new Promise<{data : Iprof}>((resolve, reject) => {
    axios.put(MY_SERVER + profile.id, {
      bio: profile.bio, 
      location: profile.location,
      birth_date: profile.birth_date,
      user: decoded.user_id}, 
     { 
      headers: {
        'Authorization': `Bearer ${profile.access}`
      }
    })
    .then(res => resolve({ data: res.data }))
    .catch(err => reject(err));
  });
}


export function getprofile(access : any) {
   return new Promise<{data : Iprof[]}>((resolve, reject) => {
    axios.get(MY_SERVER,{
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
    .then(res => resolve({ data: res.data }))
    .catch(err => reject(err));
  });
}

// export function getimages() {
//   return new Promise<{ data: IImage[] }>((resolve) =>
//     axios.get(MY_SERVER).then(res => resolve({ data: res.data })))
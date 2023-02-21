import axios from "axios";
import {MY_SERVER_Albums, MY_SERVER_AlbumsType  } from "../../env";
import jwt_decode from "jwt-decode";



export function getalbums(access : string) {
  return new Promise<{data:any}>((resolve) => {
    axios.get(MY_SERVER_Albums , {
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
    .then(res => resolve({ data: res.data }))
  });
}



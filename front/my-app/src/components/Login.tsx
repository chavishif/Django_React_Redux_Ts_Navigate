import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
loginAsync, registerAsync , selectRegistered

} from '../features/login/loginSlice';
import styles from './Counter.module.css';
import { CompletionTriggerKind } from 'typescript';

export function Login() {

  // general explanation of remember:
  // first - occors the setRemember(also before the user choose checkbox)
  // after - the remember state is updated to true/false,
  //  end - the useEffect hook is called, which stores the current value of remember in localStorage




  // this function retrieve the value of remember in localstorage and write it in the remember initial state
  // any data that converts to localstorage stores as a string
  const setRemember=()=>{
    let reme = localStorage.getItem("remember")
    if(reme !== null)
        // JSON.parse - to convert the string value
        //  back to a boolean value/ any primitive data type:
        //  (such as strings, numbers, booleans, and null)
        return JSON.parse(reme)
    // not needed - occors automaticly:
    else{
      return null
    }

}

  const dispatch = useAppDispatch();
  const registerd = useAppSelector(selectRegistered);
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [remember, setremember] = useState(setRemember())



useEffect(() => {
    // console.log( localStorage.getItem("remember"))
    if(registerd){
    console.log(registerd)

    }
    else{
        console.log("not registerd")
    }
}, [registerd])

useEffect(() => {
  if (remember !== undefined)
 localStorage.setItem("remember",JSON.stringify( remember))
}, [remember])

 
  return (
    <div>
      Login
      <br></br>
    username: <input onChange={(e)=> setusername(e.target.value)}></input>
    password: <input onChange={(e)=> setpassword(e.target.value)}></input>
    <button onClick={()=> dispatch(loginAsync({username, password}))}>Login</button>
    Remember me<input onChange={(e)=>setremember(e.target.checked)}  type={'checkbox'}></input>

    </div>
  );
}

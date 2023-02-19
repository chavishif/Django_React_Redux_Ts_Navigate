import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { selectUsername } from '../features/login/loginSlice';
import { useAppSelector } from '../app/hooks';

const Albums = () => {
  let albums = [{ id: 1, desc: "trips" }, { id: 2, desc: "friends" }, { id: 3, desc: "family" }]
  const username = useAppSelector(selectUsername);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome to {username}'s gallery</h1>

      <div style={{ display: "flex" }}>


        <div style={{ backgroundColor: "pink" }}>
          My albums:<br />
          {albums.map((album) => (
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}
              key={album.id} to={`/gallery/${album.id}`} >
                 
              <ul /> {album.desc}| {" "} {" "} {" "} {" "}
            </NavLink>
          ))}
          <br />
          <Link  to="upload">upload image</Link>

        </div>
        <div >
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Albums

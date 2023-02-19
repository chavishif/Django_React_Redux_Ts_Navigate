import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectAccess, selectUsername } from '../features/login/loginSlice';
import { AddToGallery } from './AddToGallery';
import { getimagesAsync, selectImages, delimagesAsync, selectRefresh } from '../features/gallery/gallerySlice';



export function GeneralGallery() {
    const images = useAppSelector(selectImages);
    const refresh = useAppSelector(selectRefresh);
    const access = useAppSelector(selectAccess);
    const username = useAppSelector(selectUsername);
    const [updid, setupdid] = useState(0)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getimagesAsync(access))
      }, [refresh])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {images.length > 0 &&
                        images.map((img, i) => (
                            <div key={i} className="col-lg-6 mb-4">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src={`http://127.0.0.1:8000${img.image}`}
                                        width={90}
                                        height={200}
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Title: {img.title}</h5>
                                        <p className="card-text">
                                            Description: {img.description}
                                        </p>
                                        <button onClick={() => dispatch(delimagesAsync({ id: img.id, access }))}>DELETE</button>
                                        <button onClick={() => { setupdid(img.id || -1) }}>UPDATE</button>

                                    </div>
                                </div>
                            </div>
                        ))}

                    <AddToGallery updid={updid}></AddToGallery>
                </div>

            </div>

        </div>
    )
};

export default GeneralGallery;
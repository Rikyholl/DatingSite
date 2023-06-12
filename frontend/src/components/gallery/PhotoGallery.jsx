import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {

    // const [photos, setPhotos] = useState([]);

    // useEffect(() => {

    //     axios.get('https://reqres.in/api/users')
    //         .then(({data}) => {
    //             console.log(data.data);
    //             setPhotos(data.data)
    //         })
    //         .catch((err) =>{
    //             console.log(err);
    //         })
    // }, [])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/profiles/1/')
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) =>{
    //             console.log(err);
    //         })
    // })
    
    return (
        <div className='photo_gallery'>
            <img  className='photo_album' src='https://reqres.in/img/faces/2-image.jpg'/>
            <img  className='photo_album' src='https://reqres.in/img/faces/2-image.jpg'/>
            <img  className='photo_album' src='https://reqres.in/img/faces/2-image.jpg'/>
            <img  className='photo_album' src='https://reqres.in/img/faces/2-image.jpg'/>
            <img  className='photo_album' src='https://reqres.in/img/faces/2-image.jpg'/>
        </div>
    );
};

export default PhotoGallery;
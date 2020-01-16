import React from 'react';
import {useState} from 'react';
import Image from './image';

function ImagesList({images}){

    const [imageHD,saveImageHD]=useState('')

    return ( 
        <div className="container">
            <div className="row ">
   
           
                    { images.map(image =>(
                        <Image
                        key={image.id}
                        image={image}
                        imageHD ={imageHD}
                        saveImageHD={saveImageHD}
                       
                    />

                    )) }  

            </div>
        </div>
        
        
     );
}
 
export default ImagesList;
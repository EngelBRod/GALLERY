import React from 'react';
import {useState} from 'react';
import Image from './image';

function ImagesList({images}){

    const [imageHD,saveImageHD]=useState('')

    return ( 
        
            <div  className="row m-0 ">
                <div className="col-12">
                    <div id="imageBoard"  className="row">
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
   
           
                   

            </div>
       
        
        
     );
}
 
export default ImagesList;
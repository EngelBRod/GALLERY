import {useState,UseEffect} from 'react';
import React from 'react';
import view from '../img/view.png'






function Image({image,imageHD,saveImageHD}) {


    const [mouse,saveMouse]=useState([]);
    const [mouseOver,saveMouseOver]=useState(false);
    

    const mouseIn= (e)=>{
        const element= e.target;
        saveMouse(element);
        const fullImage=element.getAttribute('data-image')
        saveImageHD(fullImage);

        console.log(fullImage)
        const firstChildren= element.children[0];
        const info=firstChildren.children[0]
        if(firstChildren && info){
            
            const parent= element.parentElement;
            const firstParentChildren= parent.children[0]
            firstParentChildren.classList.add('image-blur');
            info.style.visibility="initial";
            console.log("in")
            saveMouseOver(true)
        }
      
         
    }
    const mouseOut= (e)=>{
        const element= mouse;
        console.log(element)
        console.log(element)
        

        if(element && mouseOver){

            const firstChildren= element.children[0];
            const info=firstChildren.children[0];
            const parent= element.parentElement;
            const firstParentChildren= parent.children[0]
            firstParentChildren.classList.remove('image-blur')
            info.style.visibility="hidden";
            saveMouse([]);
            console.log("out")
            saveMouseOver(false);
            
        }
    
        
    }
    return ( 
        <div  className="col-3 d-flex  align-self-start justify-content-center p-4">
            <div   className="card rounded">
            <img   src={image.previewURL} className="   img-fluid img-thumbnail"/>
                <div  onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="  prueba  rounded card-img-overlay d-flex justify-content-center align-items-center"  data-image={image.webformatURL}>
                
                     <div className="info card-text text-white d-text justify-content-center">
                         
                              <img src={view} data-toggle="modal" data-target="#exampleModal"></img>
                            
                             
                         
                         
                     </div>
                     

                </div>

                <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                   
                      <div class="modal-body">
                   
                        
                      <img   src={imageHD} className="   img-fluid " />
                      </div>
                    
                    </div>
                  </div>
                </div>
                
                

            </div>





         
            

        </div>
        
     );
}
 
export default Image;
import React,{useEffect,useState} from 'react';
import Fragment from 'react';
import Search from './components/search';
import ImageList from './components/imagesList'
import Header from './components/header'

function App() {

  const [imageSearch,saveImageSearch] =useState('')
  const [images,saveImages]=useState([])

  const searchApi =  async ()=>{
    const key=process.env.REACT_APP_PIXABAY_KEY;
    const amountPages=30;
    const url=`https://pixabay.com/api/?key=${key}&q=${imageSearch}&per_page=${amountPages}&image_type=photo`;
    const results= await fetch(url);
    const response= await results.json()
    
    saveImages(response.hits)
    console.log(response.hits)

    

  }


  useEffect(()=>{

    
    if(imageSearch !==''){
      searchApi()
    }

   
    
  },[imageSearch])

  return (
    
    
    <div className="App ">
    
        <Header/>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Search
              saveImageSearch={saveImageSearch}
            />          

          </div>

        </div>
      
        

             <ImageList
               images={images}
             />
          

         
        

      
      
       
     
    </div>
  );
}

export default App;

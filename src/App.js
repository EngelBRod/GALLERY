import React,{useEffect,useState} from 'react';
import Fragment from 'react';
import Search from './components/search';
import ImageList from './components/imagesList'
import Header from './components/header'

function App() {

  const [imageSearch,saveImageSearch] =useState('')
  const [images,saveImages]=useState([])
  const [currentPage,saveCurrentPage]=useState(1)
  const [totalPages,saveTotalPages]=useState(0)

  const nextPage= ()=>{
    
    if(currentPage<=totalPages){
      let pagew =  currentPage
      pagew++
      saveCurrentPage(pagew)
      
    }

    
  }

  const searchApi =  async ()=>{
    const key=process.env.REACT_APP_PIXABAY_KEY;
    const amountPages=30;
    const url=`https://pixabay.com/api/?key=${key}&q=${imageSearch}&per_page=${amountPages}&image_type=photo&page=${currentPage}`;
    const results= await fetch(url);
    const response= await results.json()    
    const pages= Math.round(response.total/amountPages)

    saveImages(response.hits)
    saveTotalPages(pages)

    console.log(response)

    

  }


  useEffect(()=>{

    
    if(imageSearch !==''){
      searchApi()
    }

   
    
  },[imageSearch,currentPage])

  return (
    
    
    <div className="App ">
    
       <header>
            <div className="container"> 

                <div className="row m-0">
                    <div className="col-12  p-0 ">
                        <nav className="navbar d-flex justify-content-around">
                        <h1 className="navbar-brand">GALLERY</h1> 
                        <Search
                          saveImageSearch={saveImageSearch}
                        />   
                        </nav>

                    </div>
                    
                </div>  
            </div>

        </header>



        <div className="row">
          <div className="col-12 d-flex justify-content-center">
                   

          </div>

        </div>
      
        

             <ImageList
               images={images}
             />
          
          <button onClick={nextPage} >prueba</button>

         
        

      
      
       
     
    </div>
  );
}

export default App;

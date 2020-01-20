import React,{useEffect,useState} from 'react';
import Fragment from 'react';
import Search from './components/search';
import ImageList from './components/imagesList'
import Header from './components/header'
import logo from './img/Logo.png'

function App() {

  const [imageSearch,saveImageSearch] =useState('')
  const [images,saveImages]=useState([])
  const [currentPage,saveCurrentPage]=useState(1)
  const [totalPages,saveTotalPages]=useState(0)

  const nextPage= ()=>{
    console.log("total"+totalPages)
    if(currentPage<totalPages){
      let pagew =  currentPage
      pagew++
      saveCurrentPage(pagew)
      
    }
    

    
  }

  const previousPage= ()=>{

    if(currentPage>1){
      let pagew =  currentPage
      pagew--
      saveCurrentPage(pagew)
      
    }

  }

  const searchApi =  async ()=>{
    const key=process.env.REACT_APP_PIXABAY_KEY;
    const amountPages=28;
    const url=`https://pixabay.com/api/?key=${key}&q=${imageSearch}&per_page=${amountPages}&image_type=photo&page=${currentPage}`;
    const results= await fetch(url);
    const response= await results.json()    
    const pages= Math.round(response.totalHits/amountPages)
    console.log(pages)
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
    
    <div id="imageFrame"  className="container py-4 mx-auto my-4"> 
          <header>      

                    <div className="row m-0">
                        <div className="col-12  p-0 ">
                            <nav className="navbar d-flex justify-content-around">
                            <img src={logo}></img> 
                            <Search
                              saveImageSearch={saveImageSearch}
                            />   
                            </nav>

                        </div>
                        
                    </div>  
              

            </header>
            <ImageList
               images={images}
             />

          <section>
            <div className="row"> 
              <div className="col-12 d-flex justify-content-center">
              <button onClick={previousPage} className="btn button mx-2" >Prev</button> 
                <button onClick={nextPage} className="btn button mx-2" >Next</button>
                
              </div>
              
            </div>
          </section>

          
      </div>



        
      
        

            
          
         

         
        

      
      
       
     
    </div>
  );
}

export default App;

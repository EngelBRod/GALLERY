import React,{useState} from 'react';
import Error from './error'



function Search({saveImageSearch}){


    const [search,saveSearch] = useState('');
    const [error,setError]=useState(false);

    const processForm = e =>{
        e.preventDefault()
      

        if(search===''){
            setError(true);
            return;
        }
        setError(false)
        saveImageSearch(search)
    }

    return(

        <form onSubmit={processForm}>
            
              <input 
                            
              name='search'
              onChange={e => saveSearch(e.target.value)}
              type="text"/>

              <input
               
               type="submit"/>

               {(error) ?  <Error/> 
               : null }

        </form>
        

    )
}

export default Search;
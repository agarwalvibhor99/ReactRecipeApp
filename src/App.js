import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import './App.css';

const App = () =>{

  const API_ID = "55d0a994"
  const API_KEY = "4c91269be45aea7f54dce76c870d4013"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  


  useEffect(()=>{
    getRecipe()
  }, [query])

  const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    console.log(data)
    if(data.hits.length === 0){
      toast("Please Try Again")
    }
    else{
      setRecipes(data.hits)
    }
   
 
  }
  
  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault() // Prevent Page refresh
    setQuery(search)
    setSearch('') 
  }
  return(
    <div className="App">
      <h1>Welcome To Recipe World</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type = "text" value ={search} onChange={updateSearch}/>
        <button className="search-button" type = "submit"> Submit </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe url={recipe.recipe.url} key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image = {recipe.recipe.image}  />
        ))}
      </div>
    </div>
  )

}

export default App;

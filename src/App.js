import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//bdd1a886
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=bdd1a886';



 const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

        const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }


   

    useEffect(() => {
       searchMovies('SpiderMan');
      
    }, [])
    

    return (
        <>
        <div className="app">
            <h1>MovieLand...</h1>
            <div className="search">
                <input placeholder="serach for movies" 
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                onKeyPress={(e)=>{
                    if ( e.key==='Enter') {
                        return searchMovies(searchTerm);
                    }
                }}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={()=>{searchMovies(searchTerm)}} 
                
                
                />
            </div>
       
        {
            movies?.length > 0 ? (
                <div className="container">
                    
                    { 
                    movies.map((m)=> <MovieCard key={m.imdbID} movie={m} />)
                    }
                   
                </div>
            ) : (
                <div className="empty">
                    <h2>No movie found</h2>
                </div>
            )


        }
       
            
            </div>

        </>);
}
export default App;

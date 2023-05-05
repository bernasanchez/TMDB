import React from 'react'
import axios from "axios"; 
import { useEffect, useState } from 'react';
import Card from './Card'

const Container = () => {


  const API_KEY = "885a5602bc39ea39799732be5113eaf7";
  const TMDB_URL = "https://api.themoviedb.org/3"; 

  const [movies, setMovies] = useState([])

  const getMovies = (searchKey) => {

    const type = searchKey ? "search" : "discover"
    axios.get(`${TMDB_URL}/${type}/movie`, {
      params: {api_key: API_KEY, query: type},
    })
    .then((res) => {
      console.log('RESULTADOS PELI',  res.data.results)
      setMovies(res.data.results)
    })
    
  }
  
  useEffect(() => getMovies(), [])

  return (
    <div className='container flex-row'>
      <div className='column'></div>
      {movies[0] ? (
        movies.map((movie) =>
         <Card key={movie.id} movie={movie} />
         )
      ) : (
        <h1>No hay peliculas</h1>
      )}

    </div>
  )
}

export default Container

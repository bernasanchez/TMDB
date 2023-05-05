import React from 'react'


const Card = ({movie}) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original"
  

  return (     
     <div className="card " >
      <img  src={`${URL_IMAGE}${movie.poster_path}`} height={200}  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
      </div>
    </div>


  )
}

export default Card

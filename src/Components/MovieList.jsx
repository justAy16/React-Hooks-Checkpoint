import { movie } from '../Data/Movie'
import MovieCard from './MovieCard'
import React from 'react'

function MovieList() {
    return (
        <div style={{ display: 'flex', marginTop: 90, width: '100%' }}>
            {movie.map((movieCard, index) => (
                <MovieCard key={index} {...movieCard} />
            ))}
        </div>
    )
}

export default MovieList

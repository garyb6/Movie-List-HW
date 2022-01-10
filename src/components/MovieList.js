import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movie name={movie.name} key={movie.id}>{movie.url}</Movie>
        );
    });

    return(
        <>
            {movieNodes}
        </>
    )
}

export default MovieList;

{/* <Movie href= {movie.url} name={movie.name} key={movie.id}></Movie> */}
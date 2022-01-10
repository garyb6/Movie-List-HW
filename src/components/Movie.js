import React from "react";

const Movie = ({name, url}) => {

    return(
        <>
            <h3>{name}</h3>
            <p>{url}</p>
        </>
    )
}

export default Movie;
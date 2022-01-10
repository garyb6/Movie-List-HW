import React, {useState} from "react";

const Movie = ({name, url}) => {

    return(
    <>
        <h3>{name}</h3>
        <a href={url}>{url}</a>
    </>
    )
}

export default Movie;
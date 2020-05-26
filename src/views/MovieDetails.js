import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const MovieDetails = props => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
            console.log(res)
            setMovie(res.data)
            });
    }, [props.id])

    const removeFromDom = movie=> {
        setMovie(movie);
    }

    const deleteMovie = (movieId) => {
        axios.delete('http://localhost:9011/api/movie/delete/' + movieId)
            .then(res => {
                removeFromDom(movieId)
                navigate("/")
            })
    }

    return (
        <>
        <div>
            <p>Title : {movie.title}</p>
            <p>Rate : ${movie.rate}</p>
            <p>Duration : {movie.duration}</p>
        </div>
        <br/>
        <Link to={"/update/"+movie._id}>update this movie</Link>
        <button className="linkStyle" onClick={(e)=>{deleteMovie(movie._id)}}>delete this movie</button>
        </>
    );
};

export default MovieDetails;

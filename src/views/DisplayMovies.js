import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const DisplayMovies = () => {

    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:9011/api/movies')
            .then(res=>{
                setMovies(res.data);
                setLoaded(true);
                console.log(res.data);
            });
    },[])

    const removeFromDom = movieId => {
        setMovies(movies.filter(movie => movie._id !== movieId));
    }

    return (
        <div>
            <p>~ all movies ~</p>
            {loaded && <MovieList movies={movies} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default DisplayMovies;

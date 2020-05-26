import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

const MovieList = (props) => {
  const { removeFromDom } = props;
  const deleteMovie = (movieId) => {
    axios
      .delete("http://localhost:9011/api/movie/delete/" + movieId)
      .then((res) => {
        removeFromDom(movieId);
      });
  };

  return (
    <div>
      {props.movies.map((movie, idx) => {
        return (
          <p key={idx}>
            movie :&nbsp;&nbsp;
            <Link to={"/movie/" + movie._id}>{movie.title}</Link>&nbsp;&nbsp;$
            {movie.rate}&nbsp;&nbsp;
            <button
              className='linkStyle'
              onClick={(e) => {
                deleteMovie(movie._id);
              }}
            >
              delete this movie
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default MovieList;

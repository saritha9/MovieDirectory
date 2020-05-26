import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import { Router } from '@reach/router';
import CreateMovie from './views/CreateMovie';
import UpdateMovie from './views/UpdateMovie';
import DisplayMovies from './views/DisplayMovies';
import MovieDetails from './views/MovieDetails';
import Navigation from './components/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <MovieDetails path="/movie/:id"/>
        <UpdateMovie path="/update/:id"/>
        <CreateMovie path="/new"/>
        <DisplayMovies path="/"/>
      </Router>
    </div>
  );
}

export default App;

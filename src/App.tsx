import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './pichead';
import MovieList from './movies/movies';
import Home from './home';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
    );
  }
}
//Main function of program with components
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;

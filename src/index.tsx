import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Podcasts from './podcasts';
import Movies from './movies/movies';
import Home from './home';
import Welcome from './App';
//Route to multiple pages
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />

            <Route path="podcasts" element={<Podcasts />} />

            <Route path="movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

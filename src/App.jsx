import { useState } from 'react';
  
import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import Home from './components/Home';
import Trending from "./components/prtials/Trending"
import second from './components/prtials/Popular'
import Popular from './components/prtials/Popular';
import Movie from './components/prtials/Movie';
import Tvshows from './components/prtials/Tvshows';
import People from './components/prtials/People'
import TvDetails from './components/prtials/TvDetails';
import MovieDetails from './components/prtials/MovieDetails';
import PeopleDetails from './components/prtials/PeopleDetails';
import Trailer from './components/prtials/Trailer';
import About from './components/prtials/About';
import Contact from './components/prtials/Contact';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/tv' element={<Tvshows />} />
        <Route path='/people' element={<People />} />

        <Route path="/movie/details/:id" element={<MovieDetails />}>
        <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    />
        </Route>
        <Route path="/tv/details/:id" element={<TvDetails />} >
        <Route
                        path="/tv/details/:id/trailer"
                        element={<Trailer />}
                    />
        </Route>
        
        <Route path="/people/details/:id" element={<PeopleDetails />} ></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;

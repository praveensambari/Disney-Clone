import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Tv from './components/Tv';
import Movies from './components/Movies';
import Sports from './components/Sports';
import DisneyPopular from './components/DisneyPopular';
import Kids from './components/Kids';
import ShowDetails from './components/ShowDetails';
function App() {
  return (
    <div >
      <NavigationBar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='tv' element={<Tv />} />
        <Route path='movies' element={<Movies />} />
        <Route path='sports' element={<Sports />} />
        <Route path='disneypopular' element={<DisneyPopular />} />
        <Route path='kids' element={<Kids />} />
        <Route path='showDetails' element={<ShowDetails />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

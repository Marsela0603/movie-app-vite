import { useState } from 'react'
// import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NowPlaying from './pages/NowPlaying'
import CreateMovie from './pages/Create'
import Layout from './Layout/index'
import TopRatedMovie from './pages/TopRated'
import PopularMovie from './pages/Popular'
import Counter from './components/Counter/Counter'
import DetailMovie from './pages/Detail'
import data from './utils/constans/data'
import MoviesContext from './components/context/MoviesContext'

function App() {

  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies, setMovies
  };
  return (
  <>

  {/* <Home /> */}
  <MoviesContext.Provider value={contextValue}>
    <Layout >
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/movie/create" element={<CreateMovie />}> </Route>
      <Route path="/movie/now" element={<NowPlaying />}> </Route>
      <Route path="/movie/top" element={<TopRatedMovie />}> </Route>
      <Route path="/movie/popular" element={<PopularMovie />}> </Route>
      <Route path="/movie/NowPlaying" element={<NowPlaying />}> </Route>
      <Route path="/movie/TopRated" element={<TopRatedMovie />}> </Route>
      <Route path="/counter" element={<Counter />}> </Route>
      <Route path="/movie/:id" element={<DetailMovie />}> </Route>
    </Routes>
    </Layout>
    </MoviesContext.Provider>

  </>
  )
}

export default App

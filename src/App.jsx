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

function App() {
  return (
  <>

  {/* <Home /> */}
    <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/movie/create" element={<CreateMovie />} />
      <Route path="/movie/now" element={<NowPlaying />} />
      <Route path="/movie/top" element={<TopRatedMovie />} />
      <Route path="/movie/popular" element={<PopularMovie />} />
      <Route path="/movie/NowPlaying" element={<NowPlaying />} />
      <Route path="/movie/TopRated" element={<TopRatedMovie />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
    </Layout>

  </>
  )
}

export default App

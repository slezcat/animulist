import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import MovieContainer from '../components/MovieContainer'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Navbar/>
    <div>
        <Carousel/>
        <MovieContainer/>
    </div>
    </>
  )
}

export default Home
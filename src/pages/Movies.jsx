import React from 'react'
import BannerSlider from '../components/shared/BannerSlider'
import Moviefilters from '../components/Movies/Moviefilters'
import MovieList from '../components/Movies/MoviesList'

const Movies = () => {
  return (
    <div>
        <BannerSlider/>
        <div className='flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen 
        md:px-[100px] pd-10 pt-8'>
            <Moviefilters/>
            <MovieList/>
        </div>
    </div>
  )
}

export default Movies
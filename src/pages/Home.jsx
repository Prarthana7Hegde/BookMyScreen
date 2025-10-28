import React from 'react'
import BannerSlider from '../components/shared/BannerSlider'
import Recommended from '../components/Recommended'
import LiveEvents from '../components/shared/LiveEvents'
import Navbar from '../components/shared/Navbar'

const Home = () => {
  return (
    <div>
    <Navbar/>
        <BannerSlider/>
        <Recommended/>
        <LiveEvents/>
    </div>
  )
}

export default Home
import React from 'react'
import '../Home/Home.css'
import HomeSec1 from './HomeSection/HomeSec1'
import HomeSec2 from './HomeSection/HomeSec2'
import HomeSec3 from './HomeSection/HomeSec3'

const Home = () => {
  return (
    <div className='home'>
      <HomeSec1/>
      <HomeSec2/>
      <HomeSec3/>
      
    </div>
  )
}

export default Home
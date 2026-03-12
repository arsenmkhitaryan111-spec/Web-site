import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from '../Page/Home/Home'
import About from '../Page/About/About'
import Blog from '../Page/Blog/Blog'
import Team from '../Page/Team/Team'
import Services from '../Page/Services/Services'
import Gallery from '../Page/Gallery/Gallery'
import Contact from '../Page/Contact/Contact'
import Layout from '../Layout/Layout'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Layout/>}>
            <Route path='index' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/team'  element={<Team/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/blog' element={<Blog/>}/>
            
        

        </Route>
      </Routes>
    </div>
  )
}

export default Routing

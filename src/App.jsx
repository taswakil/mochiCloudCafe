import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu, { menuLoader } from './pages/Menu'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/Rootlayout'
import ContactLayout from './layout/ContactLayout'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import NotFound from './components/NotFound'
import MenuLayout from './layout/MenuLayout'

const App = () => {

  // adding the root layout & endpoints to site
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index path='/' element={<Home/>}/>
      <Route path='/menu' element = {<MenuLayout/>}>
        <Route index element={<Menu/>} loader = {menuLoader}/>
      </Route>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<ContactLayout/>}>
        <Route path='form' element = {<ContactForm/>}/>
        <Route path='info' element = {<ContactInfo/>}/>
      </Route>
      <Route path='*' element = {<NotFound/>}/>
    </Route>
  )
)

  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App
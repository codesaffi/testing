import React from 'react'
import { Outlet } from "react-router-dom";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';

function App() {


  return (


<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     <Navbar />
     <SearchBar />
     <Routes>
      <Route path='/testing/' element={<Home/>} />
      <Route path='/testing/collection' element={<Collection/>} />
      <Route path='/testing/about' element={<About/>} />
      <Route path='/testing/contact' element={<Contact/>} />
      <Route path='/testing/product/:productId' element={<Product/>} />
      <Route path='/testing/cart' element={<Cart/>} />
      <Route path='/testing/login' element={<Login/>} />
      <Route path='/testing/place-order' element={<PlaceOrder/>} />
      <Route path='/testing/orders' element={<Orders/>} />
     </Routes>
     <Outlet/>
     <Footer />
    </div>




 
  )
}

export default App


      {/* <nav>
        <Link to="/testing/">Home</Link>
        {" | "}
        <Link to="/testing/contact">Contact</Link>
      </nav>

<Outlet/> */}
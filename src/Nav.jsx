import React from 'react'
import Product from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogIn from './pages/Login';
import SingIn from './pages/SignIn';
import OrderForm from './pages/OrderForm';

function Nav() {
  return (
    <div>
        <BrowserRouter>
         <header class="shadow mb-2 bg-gray-900 text-white ">
<div class="bg-gray-900 py-4 px-6 flex justify-between items-center mb-16 ">
<img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/5968/5968253.png?ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt=""  />
        <a href="/" className="text-white font-bold text-3xl">
            <span className='text-orange-500'>El</span>ectronic <span className='text-orange-500'>Shop</span>
          </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start  ">
    <ul class="flex flex-col items-start space-y-2 md:ml-auto md:flex-row md:space-y-0 ">
    <li className="mr-6 ">
          <Link to="/" className="text-white hover:text-orange-500 text-xl font-bold">Home</Link>
          </li>
          <li className="mr-6">
          <Link to="/Product" className="text-white hover:text-orange-500 text-xl font-bold">Product</Link>
          </li>
          <li className="mr-6">
          <Link to="/About" className="text-white hover:text-orange-500 text-xl font-bold">About</Link>
          </li>

          <li className="mr-6">
          <Link to="/Contact" className="text-white hover:text-orange-500 text-xl font-bold">Contact</Link>
          
          </li>
    </ul>
    <div>
      <ul>
      <li class="text-gray-600 md:mr-12 hover:text-blue-600">
        <Link to="/Login"><button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Login</button></Link>
        <button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Search</button>
        <input className='rounded-md border-2 border-orange-500 px-2 py-1 font-medium text-black transition-color mr-3 placeholder-black' type="text" placeholder='search' />
      </li>
      </ul>
    </div>
  </nav>
</div>
</header>
<main>
        <Routes >
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Login' element={<LogIn />} />
          <Route path='/SignIn' element={<SingIn />} />
          <Route path='/OrderForm' element={<OrderForm />} />
          
        </Routes>
      </main>
</BrowserRouter>
    </div>
  )
}

export default Nav
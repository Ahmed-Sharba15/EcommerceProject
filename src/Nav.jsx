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
        <header>
    <div class="bg-gray-900 border-b border-gray-200 mb-16 ">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between h-16 lg:h-20">
                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/5968/5968253.png?ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt=""  />
                  <p className='text-white font-bold text-2xl'>
                  <span className='text-orange-500'>Bader El</span>ectronic <span className='text-orange-500'>Shop</span>
                  </p>
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
                </div>

                

                

                <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                <Link to="/Login"><button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Login</button></Link>
        <button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Search</button>
        <input className='rounded-md border-2 border-orange-500 px-2 py-1 font-medium text-black transition-color mr-3 placeholder-black' type="text" placeholder='search' />
        
                    <a href="/OrderForm" title="" class="flex items-center justify-center w-10 h-10 text-white bg-orange-500  hover:bg-gray-500 rounded-full">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    </div>


    <nav class="py-4 bg-white lg:hidden">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="mt-6">
                <div class="flex flex-col space-y-2">
                <p className='text-black font-bold text-2xl mb-9'>
                  <span className='text-orange-500'>El</span>ectronic <span className='text-orange-500'>Shop</span>
                  </p>
                <ul class="flex flex-col items-start space-y-2 md:ml-auto md:flex-row md:space-y-0 ">
    <li className="mr-6 ">
          <Link to="/" className="text-black hover:text-orange-500 text-xl font-bold">Home</Link>
          </li>
          <li className="mr-6">
          <Link to="/Product" className="text-black hover:text-orange-500 text-xl font-bold">Product</Link>
          </li>
          <li className="mr-6">
          <Link to="/About" className="text-black hover:text-orange-500 text-xl font-bold">About</Link>
          </li>

          <li className="mr-6">
          <Link to="/Contact" className="text-black hover:text-orange-500 text-xl font-bold">Contact</Link>
          </li>
    </ul>
                </div>

                <hr class="my-4 border-gray-200" />

                <div class="flex flex-col space-y-2">
                <Link to="/Login"><button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-black transition-colors hover:bg-orange-500 hover:text-white mr-3">Login</button></Link>
        <button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-black transition-colors hover:bg-orange-500 hover:text-white mr-3">Search</button>
        <input className='rounded-md border-2 border-orange-500 px-2 py-1 font-medium text-black transition-color mr-3 placeholder-black' type="text" placeholder='search' />
        
        <a href="OrderForm" title="" class="flex items-center justify-center w-10 h-10 text-black bg-orange-500 hover:bg-gray-500 rounded-full">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>
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
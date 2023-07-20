// Imports react and allows us to interpret JSX and render it as real DOM elements that can be displayed on the browser
import React from 'react';
// Imports items from apollo which allows the client side to interact with GraphQL
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// This allows us to route between pages via certain paths. This way allows us to not have to create a separate router page
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const client = new

// Here we are importing our pages we want to go to
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './pages/Home';

import Header from './components/Header';


function App() {

  return (
    /* Router will keep track of the location state */
    <BrowserRouter>
      <div className='w-screen h-screen bg-red-300'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

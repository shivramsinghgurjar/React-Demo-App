import React from 'react';
import Signin from './components/Signin';
import Navbar from './components/navbar';
import Pagination from './components/pagination';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard';


export default function App() {
  return (
    // <div>
    // {/* <Navbar/> */}
    //   <Signin />
    //   {/* <Pagination/> */}
    // </div>
    // <Navbar />

    <BrowserRouter>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/pagination" element={<Pagination />} /> */}
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

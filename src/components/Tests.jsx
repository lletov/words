import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { Test100 } from './Test100'
import { Link } from 'react-router-dom';

export const Tests = () => {
  return (
    <div>
    <Link to='/tests/test100'>Test 100</Link>
    {/* <HashRouter>
      <Routes>
        <Route path="/test100" element={<Test100 />} />
      </Routes>
    </HashRouter> */}
    </div>
  )
}

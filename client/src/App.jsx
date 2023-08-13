import './App.css'
import React, { Suspense } from 'react'
import Website from './pages/Website'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route element={<Layout />}/>
          <Route path='/' element={<Website />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

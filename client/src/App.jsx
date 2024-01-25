import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LeetCodeWrapped from './components/LeetCodeWrapped'
import Worth from './components/Worth/Worth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/wrapped" element={<LeetCodeWrapped />} />
        <Route path="/leetcodeWorth" element={<Worth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
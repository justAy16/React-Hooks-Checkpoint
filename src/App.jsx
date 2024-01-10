import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TrailerPage from './pages/TrailerPage'
import NewMovie from './pages/NewMovie'
import NotFound from './pages/NotFound'
import Filter from './Components/Filter'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Filter />} />
                <Route path="/trailerPage/:title" element={<TrailerPage />} />
                <Route path="/newMovie" element={<NewMovie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App

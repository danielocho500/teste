import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom"
import { NotFound } from '../components/basics/NotFound'
import { HeroInfo } from '../components/heroInfo/HeroInfo'


import { SearchScreen } from '../components/search/SearchScreen'

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='teste/' element={<SearchScreen/>} />
                    <Route path='teste/hero/:heroId' element={<HeroInfo/>}/>
                    <Route path='teste/*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}

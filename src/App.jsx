import React, { useState } from 'react';
import Index from './pages/Index';
import Page404 from './pages/Page404';
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import { store } from './store/store'

export const GlobalContext = createContext();

export default function App() {
  return (
    <GlobalContext.Provider value={store} >
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </GlobalContext.Provider>
  )
}
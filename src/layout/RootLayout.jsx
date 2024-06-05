import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

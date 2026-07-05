import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col min-h-screen px-4 md:px-8">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

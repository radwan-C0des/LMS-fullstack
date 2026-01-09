import React from 'react'
import Navber from './_components/navber'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navber />
    <main className='container mx-auto px-4 md:px-6 lg:px-8'>{children}</main>
    </>
  )
}

export default layout
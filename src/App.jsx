import React from 'react'
import { Banner, Contact, Indexes, PlusAnime, Service, Support, TakeLook, Work } from './components'

const App = () => {
  return (
    <>
        <main className='relative'>
          <Banner />
          <PlusAnime />
          <Support />
          <Work />
          <Indexes />
          <TakeLook />
          <Service />
          <Contact />
        </main>
    </>
  )
}

export default App

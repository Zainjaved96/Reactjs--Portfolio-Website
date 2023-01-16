import React from 'react'
import Greeting from './Greeting'
import Main from './Main'
import Navbar from './Navbar'
function Home() {
  return (
    <>  
        <Navbar/>
        <Greeting />
        <Main />
    </>
  )
}

export default Home
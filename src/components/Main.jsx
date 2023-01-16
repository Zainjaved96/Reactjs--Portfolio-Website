import React from 'react'
import Automation from './Automation'
import DataAnalysis from './DataAnalysis'


import FrontEnd from './FrontEnd'
function Main() {
  return (
    <div className="main">
        <h1 className='main-head'>WHAT I DO?</h1>
        <FrontEnd />
        <Automation />
        <DataAnalysis />
    </div>
  )
}

export default Main
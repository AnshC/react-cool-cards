import React from 'react'
import './App.css'

import {Cards, Card} from 'react-cool-cards'
import 'react-cool-cards/dist/index.css'

const App = () => {
  const settings = {
    background: 'transparent',
    padding: '100px',
    card : {
      spacing: {
        margin: '10px'
      },
      color: 'orange',
      width: '300px',
      maxWidth: '500px',
      height: '300px'
    }
  }
  return (
      <div>
      <Cards settings={settings}>
          <Card settings={settings}></Card>
          <Card settings={settings}></Card>
          <Card settings={settings}></Card>
          <Card settings={settings}></Card>
      </Cards>
      </div>
  )
}

export default App

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
      color: 'red',
      width: '300px',
      maxWidth: '300px',
      height: '300px'
    }
  }
  return (
      <div>
      <Cards settings={settings}>
        <Card settings={settings}>This is a card</Card>
        <Card settings={settings}>This is also a card</Card>
        <Card settings={settings}>This one too</Card>
      </Cards>
      </div>
  )
}

export default App

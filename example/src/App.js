import React from 'react'
import './App.css'

import {Cards, Card} from 'react-cool-cards'

const App = () => {

  const settings = {
    width: '300px',
    maxWidth: '500px',
    height: '300px',
    maxHeight: '300px',
    margin: '30px',
    shadow: true,
    theme : {
      color: 'red',
      type: 'rounded',
      fill: 'gradient',
      animation: 'grow'
    }
  }

  const custom = {
    width: '200px',
    height: '300px',
    maxWidth: '200px',
    margin: '30px',
    shadow: true,
    theme : {
      color: '#FFaaFF',
      animation: 'rotate'
    }
  }

  return (
      <div>
      <Cards paddingSide={'100px'} common={settings}>
        <Card />
        <Card settings={custom} />
      </Cards>
      <Cards paddingSide={'100px'} common={settings}>
        <Card settings={custom} />
        <Card />
      </Cards>
      <Cards paddingSide={'100px'} common={settings}>
        <Card />
        <Card settings={custom} />
      </Cards>
      <Cards paddingSide={'100px'} common={settings}>
        <Card settings={custom} />
        <Card />
      </Cards>
      </div>
  )
}

export default App

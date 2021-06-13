# react-cool-cards

> A cool way to display cards in React.js

[![NPM](https://img.shields.io/npm/v/react-cool-cards.svg)](https://www.npmjs.com/package/react-cool-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cool-cards
```

## Usage

```jsx
import React, { Component } from 'react'

import { Card, Cards } from 'react-cool-cards'
import 'react-cool-cards/dist/index.css'

function Example(){
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
}
```

## Component Settings

Create an object and set the 'settings' prop as the object as shown above. 

The mandatory syntax for the object: 

```jsx
const settings = {
  /* Card Wrapper Properties here */
  card : {
    /* Card Properties here */
    spacing: {

    }
  }
}

```

Above the card object we have the settings for the Card Wrapper (Cards). You can pass in: 

1. background : color
2. padding : padding
3. paddingSide: padding (for left and right)

In the card object, from the settings object created, you can pass in:

1. color : color (card background color)
2. width : width (card width)
3. height : height (card height)
4. margin : margin (margin between other cards)
5. maxWidth , maxHeight : width (maxWidth stops the cards from covering all the space available)
6. shadow : boolean (true or false to toggle default shadow)
7. animation : classname for custom animations on all cards 

### Animation 

Set the animation property to a classname with its own custom animation / transition. 

Example: 

JSX Property
animation: 'cardGrow'

CSS

.cardGrow{
  transition: transform 0.2s;
}

.cardGrow:hover{
  transform: scale(1.1);
}

### Shadow

You can overide the default shadow by using '!important' in CSS

## Classes

In CSS, you can use the '.card' classname to define styles of a Card. The '.cards' classname will be used to define styles of the Cards Wrapper. 

## License

MIT © [AnshC](https://github.com/AnshC)

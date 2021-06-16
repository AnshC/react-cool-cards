# react-cool-cards

> A cool way to display cards in React.js

[![NPM](https://img.shields.io/npm/v/react-cool-cards.svg)](https://www.npmjs.com/package/react-cool-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cool-cards
```

## Usage

```jsx
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
      fill: 'gradient'
    }
  }

  return (
      <div>
      <Cards common={settings}>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
      </Cards>
      </div>
  )
}
```

## Component Props

### Cards Wrapper

The Cards Wrapper Component acts as a div in form of a row.

| property name | type                        | description                                                     |
|---------------|-----------------------------|-----------------------------------------------------------------|
| background    | any color e.g. #FFFFFF      | Defines the background color                                    |
| padding       | any padding value e.g. 10px | Defines the inner padding                                       |
| paddingSide   | any padding value e.g. 10px | Defines the left and right padding                              |
| common        | an object                   | Defines a common style object for all the child Card Components |

```jsx
<Cards padding={'50px'} background={'#FFFFFF'} common={settings}>
  <Card>
    Card Content
  </Card>
</Cards>
```

### Card Component

| property name        | options                        | description                                                                                                                 |
|----------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| width                | value of width e.g. 100px      | sets the minimum width of the card                                                                                          |
| maxWidth             | value of width e.g. 150px      | sets the maximum width the card can grow to due to flex grow - you can keep it the same value as width to have a fixed size |
| height               | value of height e.g. 200px     | sets the minimum height of the card                                                                                         |
| maxHeight            | value of height e.g. 200px     | sets the maximum height of the card                                                                                         |
| margin               | value of margin e.g. 15px      | sets the margin between cards                                                                                               |
| shadow               | boolean e.g. true              | sets a default shadow to override this shadow, set the 'style' prop to custom and define it in CSS                          |
| overflow             | value for overflow e.g. hidden | sets the overflow in the card.                                                                                              |
|----------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Theme property  name | options                        | description                                                                                                                 |
|----------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| color                | 'red', 'blue', 'green', 'dark' | sets the theme color of the card                                                                                            |
| type                 | 'rounded', 'square'            | sets the corners of the card                                                                                                |
| fill                 | 'solid', 'gradient'            | sets the fill type of the card.  by default, it's set to gradient                                                           |
| animation            | 'grow', 'shrink', 'rotate'     | sets different types of pre-made animations to the cards                                                                    |

Make sure you've defined 'theme' as an object in the settings prop as shown below.

```jsx
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
      fill: 'gradient'
    }
  }

  return (
      <div>
      <Cards common={settings}>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
        <Card>
          This is a Card
        </Card>
      </Cards>
      </div>
  )
}
```

## The 'settings' prop

The syntax for providing styles of a card is

```js
const settings = {
  // All the general styels of the card here
  theme: {
    // Theme styles here
  }
}
```

## The 'common' prop

To define every card's style and theme, you need to pass in a prop called 'settings' in the Card Wrapper Component (Cards) with an object containing the necessary settings

This is useful as you don't have to keep passing in a settings object to each card. 

While you use the <code>common<code> prop and you want to style a custom card you can pass the <code>settings</code> of the Card with a custom object as shown below

```jsx

const settings = {
  // Common Styles
}

const custom = {
  // Individual custom style for the 1st card
}

<Cards common={settings}>
  <Card settings={custom}>
    Card Content
  </Card>
</Cards>

```

## Default Styles

### Theme

If not specified, but the theme object has been created with a color, the default theme has a soft gradient of the color and rounded corners. 

The current theme colors are: 

1. Red
2. Green
3. Blue
4. Dark (A Dark grey card used in darkmode)

You can also add any hex color / background image (gradients) resulting in a solid background of your hex color

### General Styles

If not specified, the Card component has its own defined styles for its inner content. To override this settings pass the 'style: 'custom'' property in the General styles section of the settings object


## CSS Classes

To access the Card Wrapper Class use the classname '.cool-card-wrapper'

To access the Card Class use the classname '.cool-card'


## License

MIT © [AnshC](https://github.com/AnshC)

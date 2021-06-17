import React, { useEffect, useRef, useState } from 'react'

function Cards({ children, background, padding, paddingSide, common }) {
  const styles = {
    main: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      height: '100%',
      // Settings Styles (Props)
      backgroundColor: background,
      paddingLeft: paddingSide,
      paddingRight: paddingSide,
      padding: padding
    }
  }

  return (
    <div style={styles.main} className='cool-card-wrapper'>
      {common !== undefined
        ? React.Children.map(children, (child) => {
            if (child.props.settings === undefined) {
              return React.cloneElement(child, { settings: common })
            } else if (child.props.settings !== common) {
              return React.cloneElement(child)
            }
          })
        : children}
    </div>
  )
}

function Card({ children, settings }) {
  const [shadow, setShadow] = useState(null)
  const [display, setDisplay] = useState('flex')
  const [font, setFont] = useState('sans-serif')
  const [themeColor, setThemeColor] = useState(null)
  const [themeType, setThemeType] = useState()
  const [themeBg, setThemeBg] = useState(null)
  const [themefill, setThemeFill] = useState('gradient')
  const [themeAnimation, setAnimation] = useState()

  const cardRef = useRef(null)

  useEffect(() => {
    cardRef.current.addEventListener('mouseover', ()=>{
      if (themeAnimation === 'grow') {
        cardRef.current.style.transform = 'scale(1.05)'
      }
      if (themeAnimation === 'shrink') {
        cardRef.current.style.transform = 'scale(0.9)'
      }
      if (themeAnimation === 'rotate') {
        cardRef.current.style.transform = 'rotate(5deg)'
      }
    })
    cardRef.current.addEventListener('mouseout', ()=>{
        cardRef.current.style.transform = 'scale(1) rotate(0deg)'
    })  
  })

  useEffect(() => {
    if (settings.shadow === true) {
      setShadow('rgba(0,0,0,0.4) 0px 0px 13px')
    }
    if (settings.style === 'custom') {
      setDisplay(null)
      setFont(null)
      setShadow(null)
    }
    if (settings.theme !== undefined) {
      setAnimation(settings.theme.animation)
      setThemeColor(settings.theme.color)
      setThemeBg(themeColor)
      setThemeFill(settings.theme.fill)
      if (
        settings.theme.type === undefined ||
        settings.theme.type === 'rounded'
      ) {
        setThemeType('10px')
      } else if (settings.theme.type === 'no-round') {
        setThemeType('0px')
      }
      if (themeColor === 'red') {
        if (themefill === 'gradient' || themefill === undefined) {
          setThemeBg('linear-gradient(to top right, red, #f76459)')
        } else if (themefill === 'solid') {
          setThemeBg('red')
        }
      }
      if (themeColor === 'green') {
        if (themefill === 'gradient' || themefill === undefined) {
          setThemeBg('linear-gradient(to top right, green, #4ed977)')
        } else if (themefill === 'solid') {
          setThemeBg('green')
        }
      }
      if (themeColor === 'blue') {
        if (themefill === 'gradient' || themefill === undefined) {
          setThemeBg('linear-gradient(to top right, blue, #5289ff)')
        } else if (themefill === 'solid') {
          setThemeBg('blue')
        }
      }
      if (themeColor === 'dark') {
        if (themefill === 'gradient' || themefill === undefined) {
          setThemeBg('linear-gradient(to top right, #27272b, #636363)')
        } else if (themefill === 'solid') {
          setThemeBg('#27272b')
        }
      }
    }
  })
  const styles = {
    main: {
      /* Default Styles */
      display: display,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: font,
      boxShadow: shadow,
      flex: '1 0',
      transition: 'all 0.3s',
      /* Property Defined Styles */
      width: settings.width,
      height: settings.height,
      backgroundColor: themeBg,
      backgroundImage: themeBg,
      margin: settings.margin,
      maxWidth: settings.maxWidth,
      minWidth: settings.width,
      minHeight: settings.height,
      maxHeight: settings.maxHeight,
      overflow: settings.overflow,
      borderRadius: themeType
    }
  }
  return (
    <div style={styles.main} className='cool-card' ref={cardRef}>
      {children}
    </div>
  )
}

export { Cards, Card }

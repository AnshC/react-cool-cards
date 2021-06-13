import React, {useEffect, useState} from 'react'

function Cards({children, settings}){
  useEffect(()=>{
    const cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
      card.classList.add(settings.card.animation)
    })
  })
  const styles = {
    main: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      // Settings Styles (Props)
      backgroundColor: settings.background,
      paddingLeft: settings.paddingSide,
      paddingRight: settings.paddingSide,
      padding: settings.padding,
    }
  }
  return(
    <div style={styles.main} className="cards">
      {children}
    </div>
  )
}

function Card({children, settings}){
  const [shadow, setShadow] = useState("")
  useEffect(()=>{
    if(settings.card.shadow === true){
      setShadow('rgba(0,0,0,0.6) 0px 0px 10px')
    } else {
      setShadow('transparent 0px 0px 10px')
    }
  })
  const styles = {
    main: {
      flex: '1 0',
      width: settings.card.width,
      height: settings.card.height,
      backgroundColor: settings.card.color,
      margin: settings.card.spacing.margin,
      maxWidth: settings.card.maxWidth,
      minWidth: settings.card.width,
      minHeight: settings.card.height,
      maxHeight: settings.card.maxHeight,
      boxShadow: shadow,
      overflow: 'hidden'
    }
  }
  return(
    <div style={styles.main} className="card">
      {children}
    </div>
  )
}

export {Cards, Card};
import React from 'react'
import './Title.css'
import { useTheme } from '../../context/ThemeContext'

const Title = ({ subTitle, Title }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`title-section ${darkMode ? 'dark' : ''}`}>
      <div className="title-content">
        <span className="subtitle">{subTitle}</span>
        <h2 className="main-title">{Title}</h2>
        <div className="title-decoration">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  )
}

export default Title

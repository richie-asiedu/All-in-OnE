import React from 'react'
import './Title.css'

const Title = ({Title}) => {
  return (
    <div className='title-container'>
      <h4 className='title'>{Title}</h4>
      <a href="#" className='view-all'>View All</a>
    </div>
  )
}

export default Title

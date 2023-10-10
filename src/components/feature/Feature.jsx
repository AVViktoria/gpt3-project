import React from 'react'
import './feature.css';


const Feature = ({title,
text}) => {
  return (
    <div className='gpt3__features-container_feature'>
      <div className="gpt3__features-container_feature-title">
        <h1>{ title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        { text}
      </div>
    </div>

  )
}

export default Feature;
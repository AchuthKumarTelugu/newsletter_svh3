import React from 'react'
import "./MiniNewsCard.css"
const MiniNewsCard = ({item}) => {
  return (
   <div className="miniNewsCard">
    <img src={item.image} alt="" />
    <div className="news-body">
        <h2 className="title">
            {item.name}
        </h2>
        <p className="description">
            {item.description.substring(0,80)}...
        </p>
    </div>
   </div>
  )
}

export default MiniNewsCard

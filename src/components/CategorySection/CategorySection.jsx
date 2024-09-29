import React, { useState } from 'react'
import "./CategorySection.css"
import Heading from "../Heading/Heading.jsx"
import MiniNewsCard from '../MiniNewsCard/MiniNewsCard.jsx'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
const CategorySection = ({categoryName,data}) => {
  const [currIndex, setCurrIndex] = useState(1)
  const [cardsPerSection, setCardsPerSection] = useState(3)
  let endIndex=currIndex*cardsPerSection
  let startIndex=endIndex-cardsPerSection
  let modifiedData=data.slice(startIndex,endIndex)
  // console.log(modifiedData)
  console.log(data)
  let increaseCurrIndex = () => {
    let limit=Math.ceil(data.length/cardsPerSection)
    setCurrIndex(val=>val!=limit?val+1:1)
  }
  let decreaseCurrIndex = () => {
    let limit=Math.ceil(data.length/cardsPerSection)
    setCurrIndex(val=>val!=1?val-1:limit)
  }
  
  
  return (
    <div className='category-section'>
      <div className="category-section-header">
      <Heading title={categoryName} />
      <div className="pagination-arrows">
       <FaArrowLeft className='pagination-arrows-right'
       onClick={decreaseCurrIndex}
       /><FaArrowRight className='pagination-arrows-right'
       onClick={increaseCurrIndex}
       />
      </div>
      </div>
      <div className="news-cards">
        {
            modifiedData.map((value,index)=>(
                <MiniNewsCard item={value} key={index}/>
            ))
        }
      </div>
    </div>
  )
}

export default CategorySection

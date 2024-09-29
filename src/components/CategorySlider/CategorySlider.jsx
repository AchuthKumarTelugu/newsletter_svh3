import React, { useEffect, useState } from 'react'
import "./CategorySlider.css"
import Heading from '../Heading/Heading'
import Slider from 'react-slick'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import MiniNewsCard from '../MiniNewsCard/MiniNewsCard';
const CategorySlider = ({ title, data }) => {
    // const settings = {

    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows:true,
    //     // autoplay: true, 
    //     // autoplaySpeed: 2000,      
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         },
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };
    const [currIndex, setCurrIndex] = useState(0);
    const increaseIndex = () => {
        console.log()
        let length = data.length
        setCurrIndex(value => (value + 1) % length)
    }
    const decreaseIndex = () => {
        let length = data.length
        setCurrIndex(value => value == 0 ? length - 1 : value - 1)
    }
    // useEffect(()=>{
    //     let indexIncrement=setInterval(() => {
    //         increaseIndex()
    //     }, 4000);
    //    return ()=>clearInterval(indexIncrement)
    // },[])
    return (
        <div>
            <div className="top">
                <Heading title={title} />
                <button className="view-all">View All</button>
            </div>
            <div className="data-body">
                <div className="preview-slider">
                    <div className='slider-card'>
                        <div className="image-slider">
                            <img src={data[currIndex].image} alt="" />
                            <FaArrowCircleLeft className='left-arrow'
                                onClick={() => decreaseIndex()}
                            />
                            <FaArrowCircleRight className='right-arrow'
                                onClick={() => increaseIndex()}
                            />
                        </div>
                        <div className="slider-card-body">
                            <h2 className='slider-card-title'>{data[currIndex].id + ". "}{data[currIndex].name}</h2>
                            <p className='slider-card-description'>{data[currIndex].description.substring(0, 80)}...</p>
                        </div>

                    </div>

                </div>
                <div className="info-vertical-slider">
                    {
                        data.map((value, index) => (
                            // <MiniNewsCard key={index} item={value} className="mini-news-card" />
                            <div className="mini-news-card" key={index}>
                            <img src={value.image} alt="" />
                            <div className="news-body">
                                <h2 className="title">
                                    {value.name}
                                </h2>
                                <p className="description">
                                    {value.description.substring(0,50)}...
                                </p>
                            </div>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategorySlider

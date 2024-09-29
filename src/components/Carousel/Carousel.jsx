import React from 'react'
import "./Carousel.css"
import Slider from 'react-slick';
const Carousel = ({carousel_list}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true, 
    autoplaySpeed: 2000,      
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    // let carousel_list=[
    //     {id:1,
    //      name:"News 1,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:2,
    //      name:"News 2,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:3,
    //      name:"News 3,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:4,
    //      name:"News 4,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:5,
    //      name:"News 5,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:6,
    //      name:"News 6,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:7,
    //      name:"News 7,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:8,
    //      name:"News 8,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    //     {id:9,
    //      name:"News 9,tsunami in andhra pradhesh ,vijayawada",
    //      link:"/",
    //      image:"/assets/media_news_image.jpg"
    //     },
    // ]
  return (
    <div className="carousel">
      <div className="carousel-slider">
        <Slider {...settings}>
        {
          carousel_list.map((value,index)=>(
            <div key={index} className='carousel-card'>
                    <img src={value.image} alt="" />
                    <h4>{value.name}</h4>
                </div>
            ))
          }
          </Slider>
      </div>
    </div>
  )
}

export default Carousel

import React from 'react'
import "./Home.css"
import Carousel from '../../components/Carousel/Carousel'
import { carousel_list } from '../../Db/Data'
import news_banner from '/assets/sakshi_campign.jpg'
import bigboss_banner from '/assets/Bigboss8_sticky.jpg'
import Banner from '../../components/Banner/Banner'
import Heading from '../../components/Heading/Heading'
import CategorySection from '../../components/CategorySection/CategorySection'
import { top_news } from '../../Db/Data'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import { sports_news } from '../../Db/Data'
import BackToTop from '../../components/BackToTop/BackToTop'
import JoinNewsLetter from '../../components/JoinNewsLetter/JoinNewsLetter'
const Home = () => {

  return (
    <div className="home">
      <Heading title={"Top Stories"}/>
        <Carousel carousel_list={carousel_list}/>
        <Banner img={news_banner}/>
        <Banner img={bigboss_banner}/>
        <div className="top_latest_news">
        <CategorySection categoryName={"Top News"} data={top_news}/>
        <CategorySection categoryName={"Latest News"} data={top_news}/>
        </div>
        <CategorySlider title={"Local News"} data={top_news}/>
        <CategorySlider title={"Sports News"} data={sports_news}/>
        <BackToTop/>
        <JoinNewsLetter/>
    </div>
  )
}

export default Home

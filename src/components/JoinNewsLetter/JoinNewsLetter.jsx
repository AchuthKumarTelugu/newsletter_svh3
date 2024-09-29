import React from 'react'
import "./JoinNewsLetter.css"
const JoinNewsLetter = () => {
  return (
    <div className='join-news-letter'>
      {/* <div className="container"> */}
        <h2>
            JOIN OUR NEWSLETTER
        </h2>
        <h4>Subscribe to our newsletter to recieve the latest news and exclusive offer letter</h4>
        <input type="text" name="newsletter-input" id="" placeholder='Enter your email ID' />
        <button>Subscribe</button>
        <p>We wont send you span.Unsubscribe at any time</p>
      {/* </div> */}
    </div>
  )
}

export default JoinNewsLetter

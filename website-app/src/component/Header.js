import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div>
    <div className='header-wraper'> 
        <div className="main-info">
            {/* <h1>Web development and Website promotions</h1> */}
            <Typed className='typed-text'
            strings={["Web Design" , "Web Development" , "Facebook"  , "Google Ads"]}
            typeSpeed = {40}
            backSpeed = {60}
            loop/>
            <a href="'#" className='btn-main-offer'></a>
        </div>
    </div>
    
    </div>
  )
}

export default Header
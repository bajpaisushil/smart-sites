import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Home.css';


function Home() {
  return (
    <div className='home_page'>
        <div className='home_advertisement_space'>
          <div className='home_heading'>
          Homepage {'>'} Services {'>'} Social Media Marketing
          </div>
          <div className='home_title'>
          Ignite Your Growth with Effective Social Media Marketing
          </div>
          <div className='home_content'>
          Start your brand on the right foot with a comprehensive social media marketing strategy that engages your target audience and aligns with your long-term goals.
          </div>
          <div className='home_button_container'>
            <button className='home_button'>Get in touch</button>
          </div>
        </div>
        <div className='home_icons'>
            <InstagramIcon className='home_icon' style={{color: '#E1306C', fontSize: '8rem'}} />
            <YouTubeIcon className='home_icon' style={{color: 'red', fontSize: '8rem'}} />
            <FacebookIcon className='home_icon' style={{color: 'blue', fontSize: '8rem'}} />
        </div>
    </div>
  )
}

export default Home;

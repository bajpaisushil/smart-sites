import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Home.css';


function Home() {
  return (
    <div className='home_page'>
        <div className='home_advertisement_space'>

        </div>
        <div className='home_icons'>
            <InstagramIcon className='home_icon' style={{color: '#E1306C', fontSize: '5rem'}} />
            <YouTubeIcon className='home_icon' style={{color: 'red', fontSize: '5rem'}} />
            <FacebookIcon className='home_icon' style={{color: 'blue', fontSize: '5rem'}} />
        </div>
    </div>
  )
}

export default Home;

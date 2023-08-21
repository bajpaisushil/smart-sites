import React from 'react';
import moburst from '../../images/moburst-icon.webp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';


function Footer() {
  return (
    <div className='footer_component'>
      <div className='footer_comp_1'>
        <div className='moburst_icon'>
          <img src={moburst} alt='moburst' />
        </div>
        <div className='footer_comp_1_item'>
          <div className='name'>NYC</div>
          <div className='address'>149 5th Avenue, New York</div>
          <div className='phone'>+1 (408) 412-3472</div>
        </div>
        <div className='footer_comp_1_item'>
          <div className='name'>NYC</div>
          <div className='address'>149 5th Avenue, New York</div>
          <div className='phone'>+1 (408) 412-3472</div>
        </div>
        <div className='footer_comp_1_item'>
          <div className='name'>NYC</div>
          <div className='address'>149 5th Avenue, New York</div>
          <div className='phone'>+1 (408) 412-3472</div>
        </div>
        <div className='footer_comp_1_icons'>
          <TwitterIcon style={{fontSize: '2rem'}} />
          <LinkedInIcon style={{fontSize: '2rem'}} />
          <FacebookIcon style={{fontSize: '2rem'}} />
          <InstagramIcon style={{fontSize: '2rem'}} />
          <FacebookIcon style={{fontSize: '2rem'}} />
        </div>
      </div>
      <div className='footer_comp_2'>
        <div className='footer_comp_2_item'>
          <div className='comp_2_item_title'>MARKETING STRATEGY</div>
          <ul className='comp_2_list_container'>
            <li>Mobile Strategy</li>
            <li>Digital Strategy</li>
            <li>Social Strategy</li>
            <li>Product Strategy</li>
            <li>BI & Analytics</li>
          </ul>
        </div>
        <div className='footer_comp_2_item'>
          <div className='comp_2_item_title'>CREATIVE & CONTENT</div>
          <ul className='comp_2_list_container'>
            <li>Concept & Design</li>
            <li>Video Production</li>
            <li>Social Media Management</li>
            <li>App Store Assets</li>
            <li>UGC(User-Generated Content)</li>
          </ul>
        </div>
        <div className='footer_comp_2_item'>
          <div className='comp_2_item_title'>MEDIA BUYING</div>
          <ul className='comp_2_list_container'>
            <li>Social Search</li>
            <li>Network & RTBs</li>
            <li>Influencer Marketing</li>
            <li>Email Marketing</li>
            <li>OTT Advertising</li>
          </ul>
        </div>
        <div className='footer_comp_2_item'>
          <div className='comp_2_item_title'>NEWS LETTER</div>
          <p className='newsletter_content'>Be the first to know about the latest Digital & Mobile Marketing news, special events and much more.</p>
          <input className='newsletter_input' type='text' placeholder='Your Email address' />
          <button className='newsletter_button' type='submit'>SUBSCRIBE</button>
        </div>
      </div>
      <div className='footer_comp_3'>
        <div className='copyright'>© All Rights Reserved</div>
        <div className='comp_3_pat'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Accessibility Arrangements</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;


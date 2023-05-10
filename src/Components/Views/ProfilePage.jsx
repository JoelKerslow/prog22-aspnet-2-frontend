import React from 'react'
import Header from '../Partials/Header'
import VerticalBar from '../Partials/GeneralPartials/VerticalBar'
import ProfilePicture from '../Partials/GeneralPartials/ProfilePicture'

const ProfilePage = () => {
  return (
    <div>
        <Header />
        <div className='container mt-3'>
            <VerticalBar />
            <ProfilePicture/>
            <div className='profile-info text-center'>
                <h2>Namn på användare</h2>
                <p>email på användare</p>
            </div>
        </div>
        <ul className='list-group mt-5'>
            <li className='list-group-item pt-3 pb-1'>
                <div className='options-icon'><i class="fa-light fa-calendar"></i></div><div className='options-text'><p>Order history</p></div><div className='options-arrow'><i class="fa-light fa-chevron-right"></i></div>
            </li>
            <li className='list-group-item pt-3 pb-1'>
            <div className='options-icon'><i class="fa-light fa-credit-card-front"></i></div><div className='options-text'><p>Order history</p></div><div className='options-arrow'><i class="fa-light fa-chevron-right"></i></div>
            </li>
            <li className='list-group-item pt-3 pb-1'>
            <div className='options-icon'><i class="fa-sharp fa-light fa-location-dot"></i></div><div className='options-text'><p>Order history</p></div><div className='options-arrow'><i class="fa-light fa-chevron-right"></i></div>
            </li>
            <li className='list-group-item pt-3 pb-1'>
            <div className='options-icon'><i class="fa-light fa-gift"></i></div><div className='options-text'><p>Order history</p></div><div className='options-arrow'><i class="fa-light fa-chevron-right"></i></div>
            </li>
            <li className='list-group-item pt-3 pb-1'>
            <div className='options-icon'><i class="fa-light fa-arrow-right-from-bracket"></i></div><div className='options-text'><p>Order history</p></div><div className='options-arrow'><i class="fa-light fa-chevron-right"></i></div>
            </li>
         </ul>
    </div>
    
  )
}

export default ProfilePage




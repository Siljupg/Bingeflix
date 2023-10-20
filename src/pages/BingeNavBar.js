import React, { useEffect, useState } from 'react';
import './BingeNavBar.css'
import image from '../../src/images/BINGEFLIX-LOGO.png';
import UserAvatar from '../../src/images/Netflix-avatar.png';


function BingeNavBar() {

    const [showNav, setShowNavbar] = useState(false);

    const transistionNavBar = () => {
        if (window.scrollY > 100) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', transistionNavBar);
        return () => window.removeEventListener('scroll', transistionNavBar);
    }, [])

  return (
    <div className={`${showNav &&`navBarContainer`}`}>
        <img className='logo-dim' src={image} alt='img'/>
        <img className='img-dim' src={UserAvatar} alt='Avatar'/>
    </div>
  )
}

export default BingeNavBar

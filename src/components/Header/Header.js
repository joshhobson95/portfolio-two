import React, {useState, useEffect} from 'react'
import './Header.css'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'



function Header() {
  const [isMobile, setIsMobile] = useState(false)



  useEffect(() => {
    const isMobile = window.innerWidth < 500;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div className='header_outer_main'>
  


    {isMobile ? (

      <div>
            <MobileHeader />
 
      </div>
    ) : (
      

      <div>
            <DesktopHeader />

      </div>



    )}



  </div>

  )
}



export default Header;
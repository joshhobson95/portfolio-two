import React from 'react'
import './Jericho.css'
import cashHouse from '../assets/cashHouse.jpg'

function Jericho() {







//could be a really good place for scrolling text

  return (
    <div className='jericho_outer'>

<div className='project_top_half'>
<img src={cashHouse} alt='' className='cash_house_image'/>

    <div className='text_box'>
                <div className='header_box'>
            <h1>Jericho Nursery Website Revitalization</h1>
                </div>
    <p>In the spring, I joined forces with Jericho Nursery to reimagine and execute the redesign of their website, enhancing its functionality and aesthetic appeal. Serving as the sole developer and designer, we met many times looking at design choices, competitors' websites and examples of good web presence online and replicated what we liked about them. </p>
    <p>
    On top of the new animations, customized photos and icons, and UX/UI design based around their brand colors, I also added a full backend for their website, allowing their content creators to post blogs, pictures and media directly to the website without using a third party platform. I also worked with their ad agency to use GA4 tactics to boost their SEO to the highest caliber possible.
    </p>
    </div>
    <div className='button_container'>
        <div className='button_backdrop'></div>
    <button>Visit Website</button>
    </div>
    <div className='date_container'>
    <span>July 2023</span>
    </div>
</div>


    </div>
  )
}

export default Jericho
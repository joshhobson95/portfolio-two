import React from 'react'
import './Jericho.css'
import bigicons from '../../assets/HelloSunie/bigicons.png'
import eventdetails from '../../assets/HelloSunie/EventDetials.png'
import mainpage from '../../assets/HelloSunie/mainpage.png'
import metabox from '../../assets/HelloSunie/metabox.png'
import sunielogo from '../../assets/HelloSunie/hello-sunie.png'
import jhlogo from '../../assets/Other/newJHlogo.png'
import customplugin from '../../assets/HelloSunie/customplugin.png'
import details from '../../assets/HelloSunie/details.png'
import graphs from '../../assets/HelloSunie/graphs.png'

import jericho from '../../assets/Other/cashHouse.jpg'
import jerichologo from '../../assets/Other/WideLogoGlow-1920x482-1.png'
import aboutus from '../../assets/JerichoPage/aboutus.png'
import admin from '../../assets/JerichoPage/admin.png'
import blogpost from '../../assets/JerichoPage/blogpost.png'
import editblog from '../../assets/JerichoPage/editblog.png'
import gardencal from '../../assets/JerichoPage/gardencal.png'
import Home from '../../assets/JerichoPage/Home.png'
import mobilehome from '../../assets/JerichoPage/mobilehome.png'
import mobilenav from '../../assets/JerichoPage/mobilenav.png'
import radio from '../../assets/JerichoPage/radio.png'
import Icons from '../../assets/JerichoPage/Icons.jpg'


function Jericho() {
  return (
    <div className='project_outer_shell'>


      <div className='jericho_background_image'>

        <div className='project_top_text'>


          <h1>Jericho Nursery Website Revitalization</h1>

          <p>In the spring, I joined forces with Jericho Nursery to reimagine and execute the redesign of their website, enhancing its functionality and aesthetic appeal. Serving as the sole developer and designer, we met many times looking at design choices, competitors' websites and examples of good web presence online and replicated what we liked about them. </p>
        </div>

        
    <div className='jericho_button_container'>
        <div className='jericho_button_backdrop'></div>
    <button>Visit Website</button>
    </div>


    <div className='sunie_date_container'>
    <span>April 2023</span>
    </div>
      </div>

     

      <div className='jericho_project_mid_page'>


        <div className='jericho_tech_used'>
        <h1>Technologies Used</h1>
        </div>

        <div className='tech_icons'>
          <img className='php' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'  alt=''/>
        </div>

        <div className='jh_container'>
    <img className='jh_logo' src={jhlogo} alt=''/>
        </div>


        <div className='key_features'>
          <div className='logo_container'>
          <img className='sunie_logo' src={jerichologo} alt=''/>
          </div>
          <h1 className='kf'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background'></div>

          <div className='key_grid_one'>
            <h2>A New React App</h2>
            <p>In the execution of the HelloSunie project, I meticulously crafted the HTML code, seamlessly integrating responsive design elements and optimizing the structure to enhance user experience, demonstrating proficiency in web development and attention to detail</p>
          <div className='key_grid_one_inner'>
              <div className='inner_square'>
              <img className='mainpage' src={Home} alt=''/>
              <img className='bigicons' src={gardencal} alt=''/>
              <img className='bigicons' src={radio} alt=''/>

              </div>
      

            </div>
      </div>

                    <div className='key_grid_two'>
                      <h2>Custom NodeJS Backend</h2>
                      <p>Next, I elevated Metabox customization by implementing dynamic icons that change appearance based on received data, enhancing both the visual appeal and functionality of our site. Additionally, I spearheaded the creation of comprehensive custom post types and a robust data structure using Advanced Custom Fields (ACF), contributing significantly to HelloSunie's efforts in building a stellar product</p>
          <div className='key_grid_two_inner'>
          <div className='inner_square2'>
          <img className='metabox' src={admin} alt=''/>
          <img className='eventdetails' src={editblog} alt=''/>
          <img className='eventdetails' src={blogpost} alt=''/>
          </div>



    
          </div>
                    </div>
                    </div>
                  </div>
                </div>





<div className='jericho_project_lower_page'>

  <div className='jh_container2'>
  <img className='jh_logo2' src={jhlogo} alt=''/>
  </div>

<h1>Design Elements</h1>

<div className='splp_2'>
<div className='splp_inner_1'>
  <h3>Icons and Assets</h3>
  <p>
  In the development of a custom WordPress plugin for the project, I innovatively designed and implemented an intuitive admin calendar feature. This dynamic tool not only allowed administrative users to schedule services, complete with the ability to remove items seamlessly, but also facilitated personalized email notifications, delivering carefully formatted tables containing selected data to recipients as per the client's unique preferences
  </p>
  <div className='customplugin_container'>
  <img className='customplugin' src={Icons} alt='' />
  <img className='customplugin' src={aboutus} alt='' />
  </div>
</div>

<div className='splp_inner_2'>
  <h3>Custom Mobile Styling</h3>
  <p>
  In overseeing the data direction for specific service and project views, I meticulously curated detailed pages that dynamically showcased information relevant to the selected service. Elevating the user experience, I crafted custom PHP functions to generate insightful graphs from scratch, seamlessly integrating them into the HTML and CSS structure, thereby delivering visually compelling representations of pertinent data tailored to each viewed service or project
  </p>
  <div className='graphing_container'>
  <img className='details' src={mobilehome} alt=''/>
  <img className='graphs' src={mobilenav} alt=''/>
  </div>
</div>
</div>


</div>



        

    </div>
  )
}

export default Jericho;
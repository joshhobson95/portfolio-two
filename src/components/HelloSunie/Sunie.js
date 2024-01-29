import React from 'react'
import './Sunie.css'
import services from '../../assets/HelloSunie/Services.jpg'
import calpop from '../../assets/HelloSunie/Calendar-Popout.jpg'
import metabox from '../../assets/HelloSunie/mobile_metabox.jpg'
import servicedetails from '../../assets/HelloSunie/service-details.jpg'

function Sunie() {
  return (
    <div className='project_outer_shell'>


      <div className='sunie_background_image'>

        <div className='project_top_text'>


          <h1>Hello Sunie Software Development</h1>

          <p>A team of developers welcomed me in to help create this SaaS product called Hello Sunie. This product is used by New Mexico utility companies and contractors to manage schedules, billings, invoices, clientele and more for the aforementioned users. During my time with the team, we worked together to solve complex problems and write custom solutions to give Hello Sunie a competitive edge and a unique draw.</p>
        </div>

        
    <div className='sunie_button_container'>
        <div className='sunie_button_backdrop'></div>
    <button>Visit Website</button>
    </div>


    <div className='sunie_date_container'>
    <span>July 2023</span>
    </div>
      </div>

     

      <div className='sunie_project_mid_page'>


        <div className='sunie_tech_used'>
        <h1>Technologies Used</h1>
        </div>

        <div className='tech_icons'>
          <img className='php' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'  alt=''/>
        </div>


        <div className='key_features'>
          <h1>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background'></div>

          <div className='key_grid_one'>
            <h2>HTML Buildout</h2>
          <div className='key_grid_one_inner'>

              <div className='inner_square2'>
              <img className='calpop' src={calpop} alt=''/>
              </div>
              <div className='inner_square'>
              <img className='admincal' src={services} alt=''/>
              </div>

            </div>
      </div>

          <div className='key_grid_two'>
            <h2>MetaBoxes</h2>
<div className='key_grid_two_inner'>

<div className='inner_square3'>
<img className='metabox' src={metabox} alt=''/>
</div>
<div className='inner_square4'>
<img className='servicedetails' src={servicedetails} alt=''/>
</div>






</div>
          </div>

          </div>
        </div>
      </div>





<div className='sunie_project_lower_page'>

<h1>Design Elements</h1>

<div className='splp_2'>
<div className='splp_inner_1'>
  <h3>Advanced Custom Fields</h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>

<div className='splp_inner_2'>
  <h3>Custom Plugins</h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
</div>


</div>



        

    </div>
  )
}

export default Sunie
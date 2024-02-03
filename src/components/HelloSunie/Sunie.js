import React from 'react'
import './Sunie.css'
import bigicons from '../../assets/HelloSunie/bigicons.png'
import emailstuff from '../../assets/HelloSunie/emailstuff.png'
import eventdetails from '../../assets/HelloSunie/EventDetials.png'
import mainpage from '../../assets/HelloSunie/mainpage.png'
import metabox from '../../assets/HelloSunie/metabox.png'
import sunielogo from '../../assets/HelloSunie/hello-sunie.png'
import jhlogo from '../../assets/Other/newJHlogo.png'

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

        <div className='jh_container'>
    <img className='jh_logo' src={jhlogo} alt=''/>
        </div>


        <div className='key_features'>
          <div className='logo_container'>
          <img className='sunie_logo' src={sunielogo} alt=''/>
          </div>
          <h1 className='kf'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background'></div>

          <div className='key_grid_one'>
            <h2>HTML Buildout</h2>
          <div className='key_grid_one_inner'>
              <div className='inner_square'>
              <img className='mainpage' src={mainpage} alt=''/>
              <img className='bigicons' src={bigicons} alt=''/>

              </div>
      

            </div>
      </div>

                    <div className='key_grid_two'>
                      <h2>Custom Plugin Solutions</h2>
          <div className='key_grid_two_inner'>

          <img className='emailstuff' src={emailstuff} alt=''/>
          <div className='inner_square2'>
          <img className='metabox' src={metabox} alt=''/>
          <img className='eventdetails' src={eventdetails} alt=''/>


          </div>
    
          </div>
                    </div>
                    </div>
                  </div>
                </div>





<div className='sunie_project_lower_page'>

  <div className='jh_container2'>
  <img className='jh_logo2' src={jhlogo} alt=''/>
  </div>

<h1>Design Elements</h1>

<div className='splp_2'>
<div className='splp_inner_1'>
  <h3>Advanced Custom Fields</h3>
  <p>
  In developing the website for Hello Sunie, I strategically employed Advanced Custom Fields to effectively structure and organize post types and user data. This customization allowed for a seamless and tailored user experience, ensuring that information is efficiently categorized and easily accessible throughout the entire site. By leveraging the capabilities of Advanced Custom Fields, I aimed to enhance the overall functionality and user interface, specifically catering to the unique needs of the utility management industry.
  </p>
  <img src={jhlogo} />
</div>

<div className='splp_inner_2'>
  <h3>Graphing Data</h3>
  <p>
  As well as HTML builds out and icongraphy added to Metaboxes, I jazzed up the site by adding custom graphing functions. Now, we've got visually appealing graphs with icons, mapping multiple sets of data all over the place. It's not just about numbers; it's about making data fun and easy to understand across the entire site.
  </p>
  <img src={jhlogo} />
</div>
</div>


</div>



        

    </div>
  )
}

export default Sunie
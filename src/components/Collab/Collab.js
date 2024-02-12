import React from 'react'
import './Collab.css'
import jhlogo from '../../assets/Other/newJHlogo.png'
import collab from '../../assets/Other/collab.png'







function Collab() {
  return (
    <div className='project_outer_shell'>


      <div className='collab_background_image'>

        <div className='project_top_text'>


          <h1>Collaborative Counselling Design Work</h1>

          <p>I worked closely with the owner of Collaborative Counseling For You to develop eye-catching designs for a concept for their new website. The owner stated she wanted less text on their site, wanted to incorporate more iconography, and bring their brand blue to the forefront of design.</p>
          <br></br>
          <br></br>
        </div>

        
    <div className='collab_button_container'>
        
        <a href='https://www.figma.com/file/fYGfimt9A5Scba1r0f0y0y/Collaborative-Counselling-Designs?type=design&node-id=1%3A2235&mode=design&t=P8l72AlMtFv6w4lZ-1'>
    <button>Visit Figma</button>
        </a>
    </div>


    <div className='sunie_date_container'>
    <span>February 2023</span>
    </div>
      </div>

     

      <div className='collab_project_mid_page'>


        <div className='collab_tech_used'>
        <h1>Technologies Used</h1>
        </div>

        <div className='tech_icons'>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'  alt=''/>
          <img className='php' src='https://assets.materialup.com/uploads/b796c2d9-6cd3-4893-a24b-238af96424d2/preview.jpg'  alt=''/>
          <img className='php' src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg'  alt=''/>

        </div>

        <div className='jh_container'>
    <img className='jh_logo' src={jhlogo} alt=''/>
        </div>


        <div className='j_key_features'>
          <div className='logo_container'>
          <img className='sunie_logo' src={collab} alt=''/>
          </div>
          <h1 className='kf2'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background'></div>

          <div className='key_grid_one'>
            <h2>A New React App</h2>
            <p>In the execution of the HelloSunie project, I meticulously crafted the HTML code, seamlessly integrating responsive design elements and optimizing the structure to enhance user experience, demonstrating proficiency in web development and attention to detail</p>
          <div className='key_grid_one_inner'>
              <div className='inner_square_j'>
      

              </div>
      

            </div>
      </div>

                    <div className='key_grid_two'>
                      <h2>Custom NodeJS Backend</h2>
                      <p>Next, I elevated Metabox customization by implementing dynamic icons that change appearance based on received data, enhancing both the visual appeal and functionality of our site. Additionally, I spearheaded the creation of comprehensive custom post types and a robust data structure using Advanced Custom Fields (ACF), contributing significantly to HelloSunie's efforts in building a stellar product</p>
          <div className='key_grid_two_inner'>
          <div className='j_inner_square2'>

          </div>



    
          </div>
                    </div>
                    </div>
                  </div>
                </div>





<div className='collab_project_lower_page'>

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
  <div className='customplugin_container_j'>

  <div className='icons_grid'>
  
  </div>
  
  </div>
</div>

<div className='splp_inner_2'>
  <h3>Custom Mobile Styling</h3>
  <p>
  In overseeing the data direction for specific service and project views, I meticulously curated detailed pages that dynamically showcased information relevant to the selected service. Elevating the user experience, I crafted custom PHP functions to generate insightful graphs from scratch, seamlessly integrating them into the HTML and CSS structure, thereby delivering visually compelling representations of pertinent data tailored to each viewed service or project
  </p>
<div className='graphing_container_j'>

</div>

</div>
</div>


</div>



        

    </div>
  )
}

export default Collab;
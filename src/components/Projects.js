import React from 'react'
import ParticleBackdrop from './Background/ParticleBackdrop'
import './Projects.css' 
import cashHouse from '../assets/Other/cashHouse.jpg'
import sunie from '../assets/Other/Sunie-stock.jpg'
import { NavLink } from 'react-router-dom'

function Projects() {


//add aos to these
  return (
    <div className='projects_and_particle'>

<div className='projects_outer'>

        <div className='grid_outer'>

            <div className='grid_item_projects'>
                    <div className='cashHouse_text'>
                            <h1>Jericho Nursery Website Revitalization</h1>         
                    </div>
                <img alt='' src={cashHouse} className='cashHouse'/>
                    <div className='project_button_outer'>
                      <NavLink to='/jerichonursery'>
                      <button> View Project Page</button>
                      </NavLink>
                    </div>
            </div>

            <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Hello Sunie Software Development</h1>         
                    </div>
                <img alt='' src={sunie} className='sunie'/>
            </div>
            <div className='grid_item_projects'>
            <NavLink to='/hellosunie'>
                      <button> View Project Page</button>
               </NavLink>

            </div>
            <div className='grid_item_projects'>

            </div>





        </div>


</div>

        <ParticleBackdrop className="particle_projects"/>
    </div>
  )
}

export default Projects
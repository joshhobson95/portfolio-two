import React, { useRef } from 'react';
import ParticleBackdrop from '../Background/ParticleBackdrop';
import './Home.css'
import Modal from './Modal';
import newlogo from '../../assets/Other/newJHlogo.png'


function Home() {

    const modalRef = useRef(null);

    const toggleModalVisibility = () => {
      const whiteSquareElement = document.querySelector('.white_square');
  
      if (whiteSquareElement.classList.contains('modal-open')) {
        whiteSquareElement.classList.remove('modal-open');
      } else {
        whiteSquareElement.classList.add('modal-open');
      }
      
      const modalElement = modalRef.current;
      if (modalElement) {
        modalElement.style.display =
          modalElement.style.display === 'none' ? 'block' : 'none';
      }
    };
  




  return (
    <div className='home'>


<div className="header_shell">
        <div className="header_left">
            <div className="inner_left">
            <h1 className="JoshHobson">Josh Hobson</h1>
            <h1>Web Developer</h1>
            </div>
        </div>

</div>

<div className="white_square" onClick={toggleModalVisibility}>
  <p className='x'>x</p>
</div>
<div className="white_square2">
</div>
<div className="white_square3">
</div>


<div ref={modalRef} style={{ display: 'none' }}>
  <br></br>
        <Modal />
      </div>

<div className="newlogo_container">
  <img className="newlogohome" src={newlogo} alt=""/>
</div>




{/* 
<div className='offers'>
  <div className='offers_inner'>
  <h2>Website Development Packages</h2>
  
    <div className='offer'>
    <h3>Quick Package</h3>
    <ul>
      <li>Template Driven Wordpress Site</li>
      <li>3-5 Static Webpages</li>
      <li>4-6 Stock Photos</li>
      <li>1 Banner Designs</li>
    </ul>
    <h4>$499.99</h4>
    </div>
    <div className='offer'>
    <h3>Basic Package</h3>
    <ul>
      <li>Template Driven Wordpress Site</li>
      <li>5-7 Static Webpages</li>
      <li>7-10 Stock Photos</li>
      <li>3 Banner Designs</li>
      <li>1-2 Wordpress Plugins</li>
      <li>1 Custom Micro-Animation</li>
    </ul>
    <h4>$999.99</h4>
    </div>

    <div className='offer'>
    <h3>Standard Package</h3>
    <ul>
      <li>Wordpress Site or React App</li>
      <li>10-15 Webpages</li>
      <li>10-12 Stock Photos</li>
      <li>5 Banner Designs</li>
      <li>Unlimited Wordpress Plugins</li>
      <li>2-3 Custom Micro-Animation</li>
      <li>E-Commerce Functionality</li>
      <li>Backend Buildout</li>
      <li>Database Architecture</li>
      <li>SEO Boosting</li>
    </ul>
    <h4>$1699.99</h4>
    </div>

    <div className='offer'>
    <h3>Elite Package</h3>
    <ul>
      <li>Wordpress Site or React App</li>
      <li>15-20 Custom Designed Webpages</li>
      <li>Unlimited Stock Photos</li>
      <li>Unlimited Designs</li>
      <li>Unlimited Wordpress Plugins or React Packages</li>
      <li>Custom Micro-Animation</li>
      <li>E-Commerce Functionality</li>
      <li>Backend Buildout</li>
      <li>Database Architecture</li>
      <li>SEO Boosting</li>
    </ul>
    <h4>$2999.99</h4>
    </div>
  </div>
</div> */}


<ParticleBackdrop />

    
    </div>
  )
}

export default Home
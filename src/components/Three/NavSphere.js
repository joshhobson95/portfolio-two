// NavSphere.js
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './NavSphere.css';
import Sphere from './Utils'; // Import the Sphere component
import Menu from './Menu'; // Import the Menu component


const NavSphere = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [spherePosition, setSpherePosition] = useState({ x: 0, y: 0}); 
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleCanvasClick = () => {
      // Toggle the menu when the sphere is clicked
      setIsMenuOpen(prevState => !prevState);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('click', handleCanvasClick);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('click', handleCanvasClick);
      }
    };
  }, []);

  useEffect(() => {

    const updateSpherePosition = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        setSpherePosition({ x: rect.left, y: rect.top });
      }
    };

    window.addEventListener('resize', updateSpherePosition);
    updateSpherePosition(); 
    return () => {
      window.removeEventListener('resize', updateSpherePosition);
    };
  }, []);

  return (
    <div className="nav-sphere">
      <Canvas
        className='canvas_sphere'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1, 
        }}
        ref={canvasRef}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
        <Sphere scrollY={scrollY} />
      </Canvas>
      {isMenuOpen && (
        <Menu style={{ top: spherePosition.y, left: spherePosition.x }} />
      )}
    </div>
  );
};

export default NavSphere;

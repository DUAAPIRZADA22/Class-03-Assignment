import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div style={{
      backgroundColor: '#f3e5f5',
      padding: '10px 20px',  
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'flex-start',  
      gap: '40px',  
    }}>
      <Link href="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</Link>
      <Link href="about-us" style={{ color: '#007bff' , textDecoration: 'none' }}>About</Link> 
      <Link href="contact-us" style={{ color: '#007bff' , textDecoration: 'none' }}>Contact Us</Link>
    </div>
  );
}

export default Header;

import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div style={{
      backgroundColor: '#f3e5f5',
      padding: '10px 20px',  
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'flex-start',  
      gap: '40px',  
    }}>
        <p>&copy; 2024 . All rights reserved.</p>
        <br/>
<div>
  <ul>
    <li><Link href="/terms" style={{fontWeight:"bold"}}>Terms Of Services</Link></li>
    <br/> 
    <li><Link href="/policy" style={{fontWeight:"bold"}}>Privacy Policy</Link></li>
    </ul>
</div>

    </div>
  )
}

export default Footer;
import React from 'react'
import Link from 'next/link'


function Login() {
  return (
    <div style={{
      maxWidth: '400px', 
      height: '80vh', 
      margin: '0 auto', 
      padding: '20px', 
      paddingTop:'30px',
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      backgroundColor: '#fff3e0', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center' 
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>LogIn</h1>
      <form>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Username:</label>
        <input type='text' name='username' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password:</label>
        <input type='password' name='password' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <div style={{ textAlign: 'center' }}>
          <button type='submit' style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>LogIn</button>
          <br /> <br /> <br />
        </div>
      </form>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot password?</a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p>Don't have an account? <a href="signup-page" style={{ color: '#007bff', textDecoration: 'none' }}>Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login;

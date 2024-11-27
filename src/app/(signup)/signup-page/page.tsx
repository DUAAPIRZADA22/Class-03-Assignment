import React from 'react'
import Link from 'next/link'

function SignUp() {
  return (
    <div style={{
      maxWidth: '400px', 
      height: '80vh', 
      margin: '0 auto', 
      padding: '20px',
      paddingTop: '20px' ,
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      backgroundColor: '#fff3e0', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center'
    }}>
      <h1 style={{ textAlign: 'center',marginBottom: '10px', color: '#333', paddingTop:'40px' }}>Sign Up</h1>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', paddingTop: '10px'}}>Create your account first</h3>
      
      <form>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>First Name:</label>
        <input type='text' name='firstname' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Last Name:</label>
        <input type='text' name='lastname' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email:</label>
        <input type='email' name='email' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password:</label>
        <input type='password' name='password' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Confirm Password:</label>
        <input type='password' name='cnfrm-password' required style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type='submit' style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
        </div>
      </form>
      
      <p style={{ textAlign: 'center', margin: '20px 0' }}>OR</p>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#db4437', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign up with Google</button>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <p>Already have an account? <a href="login" style={{ color: '#007bff', textDecoration: 'none' }}>LogIn</a></p>
      </div>
    </div>
  )
}

export default SignUp;
 
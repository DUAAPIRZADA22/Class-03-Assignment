const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f3e6ff, #b3b0ff)',
        backgroundSize: '200% 200%',
        animation: 'gradientShine 5s ease infinite',
        position: 'relative',
      }}
    >
    
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.2rem',
        }}
      >
      
        <h2
          style={{
            fontSize: '1.5rem',
            textDecoration: 'underline',
            margin: 0,
          }}
        >
          Duaa Pirzada
        </h2>

        
        <div
          style={{
            display: 'flex',
            gap: '15px',
            color: 'black'
          }}
        >
          <a
            href="/signup-page"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              transition: 'color 0.3s',
            }}
          >
            SignUp
          </a>

          <br/>
          <a
            href="/login"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              transition: 'color 0.3s',
            }}
          >
            Login
          </a>
        </div>
      </div>

      
      <h1
        style={{
          fontSize: '3rem',
          color: 'darkpink',
          fontWeight: 'bolder',
          textShadow: '2px 2px 10px rgba(255, 105, 180, 0.7)',
        }}
      >
        Welcome to My Page ❤️
      </h1>
    </div>
  );
};

export default HomePage;





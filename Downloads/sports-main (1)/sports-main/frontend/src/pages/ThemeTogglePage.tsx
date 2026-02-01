import React from 'react';

const ThemeTogglePage = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const body = document.body;
    
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      html.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Theme Toggle Test</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        🌙 Toggle Dark/Light Mode
      </button>
      <p>Click the button above to toggle between dark and light themes.</p>
    </div>
  );
};

export default ThemeTogglePage;
"use client";

import React from 'react';

const TestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Page</h1>
      <p>This is a test page to verify anchor links are working.</p>
      
      <div style={{ marginTop: '50px' }}>
        <a href="#test-section" style={{ 
          display: 'inline-block', 
          padding: '10px 20px', 
          background: 'blue', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Go to Test Section
        </a>
      </div>
      
      <div id="test-section" style={{ 
        marginTop: '1000px', 
        padding: '20px', 
        background: '#f0f0f0',
        border: '1px solid #ccc'
      }}>
        <h2>Test Section</h2>
        <p>If you can see this, the anchor link is working!</p>
      </div>
    </div>
  );
};

export default TestPage; 
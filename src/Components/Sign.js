import React from 'react';
import '../Style/Sign.css'; // Import CSS file for styling

const Sign = () => {
  return (
    <div className="rotating-container">
      <div className="rotating-add-sign"><svg className='svg' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M35 0V34.0001H69.0377V35.0001H35V69.0377H34V35.0001H0V34.0001H34V0H35Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 21V8H7V21H20ZM8 9V20H19V9H8Z" fill="white" />
        </g>
      </svg>
      </div>
    </div>
  );
};

export default Sign;

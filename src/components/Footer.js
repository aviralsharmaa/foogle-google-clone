import React from 'react';

function Footer({DarkMode}) {
  return (
      <div className={`transition-all text-center p-6  border-t ${DarkMode ? 'border-gray-500':'border-gray-700'} ${DarkMode ? 'text-gray-300':'text-black'} ${DarkMode ? 'bg-neutral-800':'bg-gray-200'}`}>
          <p>2022 Foogle, Inc.</p>
      </div>
  );
}

export default Footer;

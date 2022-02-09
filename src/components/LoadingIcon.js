import React from 'react';
import {Rings} from 'react-loader-spinner';

function LoadingIcon() {
  return (
      <div className='flex items-center justify-center h-[80vh]'>
          <Rings color="#00BFFF" height={160} width={160} />
      </div>
  );
}

export default LoadingIcon;

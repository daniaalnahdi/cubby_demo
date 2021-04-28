import React from 'react';

const GradeCrossIcon = ({ isSelected, updateSelectedGrade }) => {
  return (
    <svg
      width='35'
      height='35'
      viewBox='-2 -2 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={updateSelectedGrade}
    >
      <rect
        width='36'
        height='36'
        rx='18'
        fill='#D9DBE9'
        strokeWidth={isSelected ? '2px' : ''}
        stroke={isSelected ? 'black' : ''}
      />
      <path
        d='M17.9999 16.8217L22.1249 12.6967L23.3032 13.875L19.1782 18L23.3032 22.125L22.1249 23.3033L17.9999 19.1783L13.8749 23.3033L12.6965 22.125L16.8215 18L12.6965 13.875L13.8749 12.6967L17.9999 16.8217Z'
        fill='white'
      />
    </svg>
  );
};

export default GradeCrossIcon;

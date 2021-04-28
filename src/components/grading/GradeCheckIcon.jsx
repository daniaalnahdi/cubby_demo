import React from 'react';

const GradeCheckIcon = ({ isSelected, updateSelectedGrade }) => {
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
        width='35'
        height='35'
        rx='17.5'
        fill='#00BA88'
        stroke-width={isSelected ? '2px' : ''}
        stroke={isSelected ? 'black' : ''}
      />
      <path
        d='M15.879 20.0699L23.3263 12.6219L24.4727 13.7675L15.879 22.3611L10.723 17.2051L11.8686 16.0595L15.879 20.0699Z'
        fill='white'
      />
    </svg>
  );
};

export default GradeCheckIcon;

import React from 'react';

const GradeCheckIcon = ({ isSelected, updateSelectedGrade }) => {
  return (
    <svg
      width='43'
      height='43'
      viewBox='0 0 43 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={updateSelectedGrade}
    >
      <g filter='url(#check-filter0_d)'>
        <rect
          x='4'
          width='35'
          height='35'
          rx='17.5'
          fill='#00BA88'
          stroke-width={isSelected ? '2px' : ''}
          stroke={isSelected ? 'black' : ''}
        />
        <path
          d='M19.8789 20.0699L27.3261 12.6219L28.4726 13.7675L19.8789 22.3611L14.7229 17.2051L15.8685 16.0595L19.8789 20.0699Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='check-filter0_d'
          x='0'
          y='0'
          width='43'
          height='43'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GradeCheckIcon;

import React, { useState } from 'react';

const GramsSlider = ({category}) => {
  const [grams, setGrams] = useState(0);

  const handleSliderChange = (event) => {
    setGrams(parseInt(event.target.value, 10));
  };

  return (
    <div className='w-100'>
  <div>
    {category === 'Мрсно' || category === 'Посно' ? (
      <div>
        <div className='d-inline-block'><label htmlFor="gramsSlider">Грама:</label></div>
        <input
          className='w-50'
          type="range"
          id="gramsSlider"
          min={100}
          defaultValue={100}
          max={500}
          step={1}
          onChange={handleSliderChange}
        />
        <p>Селектиравте: {grams} грама</p>
      </div>
        ) : null
    }
  </div>
</div>
  );
};

export default GramsSlider;
// src/pages/SignPage.js
import React from 'react';
// import zodiacSignsData from '../data/zodiacSignsData';

const ZodiacSignPage = ({ signData }) => {

  if (!signData) {
    return <div>Sign not found</div>;
  }

  return (
    <div>
      <h2>{signData.name} ({signData.dateRange})</h2>
      <img src={signData.imageUrl} alt={`${signData.name} symbol`} style={{ width: '100px', height: '100px' }} />
      <p><strong>Characteristics:</strong> {signData.characteristics}</p>
      <p>{signData.description}</p>
    </div>
  );
};

export default ZodiacSignPage;

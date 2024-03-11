import React, { useEffect, useState } from 'react';
import { fetchZodiacSignDetails } from '../services/zodiacService'; // This is a hypothetical function you would need to implement

const ZodiacSignPage = ({ zodiacKey }) => {
  const [signData, setSignData] = useState(null);

  useEffect(() => {
    const loadZodiacSignDetails = async () => {
      const data = await fetchZodiacSignDetails(zodiacKey);
      setSignData(data);
    };

    if (zodiacKey) {
      loadZodiacSignDetails();
    }
  }, [zodiacKey]);

  if (!signData) {
    return <div>Loading zodiac sign details...</div>;
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
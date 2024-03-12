import zodiacSignsData from '../data/zodiacSignsData.js';

function ZodiacSignPage({ sign }) {
  const signData = zodiacSignsData[sign.toLowerCase()];

  if (!signData) {
    return <div>Sign not found</div>;
  }

  return (
    <div>
      <h1>{signData.name}</h1>
      <p>Date Range: {signData.dateRange}</p>
      <p>Characteristics: {signData.characteristics}</p>
      <img src={signData.imageUrl} alt={signData.name} />
      <p>{signData.description}</p>
    </div>
  );
}


export default ZodiacSignPage;
import React, { useState } from 'react';
import axios from 'axios';

const FigmaGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [figmaDesign, setFigmaDesign] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-figma', { prompt });
      setFigmaDesign(response.data.figmaDesign);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Generate Figma Design</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows="5" cols="50" />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{figmaDesign}</pre>
    </div>
  );
};

export default FigmaGenerator;

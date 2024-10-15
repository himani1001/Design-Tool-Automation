import React, { useState } from 'react';
import axios from 'axios';

const ComponentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [components, setComponents] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-components', { prompt });
      setComponents(response.data.components);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Generate Web Components</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows="5" cols="50" />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{components}</pre>
    </div>
  );
};

export default ComponentGenerator;

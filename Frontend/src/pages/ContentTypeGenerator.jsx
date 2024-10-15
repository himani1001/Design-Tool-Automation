import React, { useState } from 'react';
import axios from 'axios';

const ContentTypeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-content-type', { prompt });
      setContentType(response.data.contentType);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Generate Content Type</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows="5" cols="50" />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{contentType}</pre>
    </div>
  );
};

export default ContentTypeGenerator;
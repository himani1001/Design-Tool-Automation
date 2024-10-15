// backend/utils/openai.js
import axios from 'axios';

const openaiApiKey = process.env.OPENAI_API_KEY;

const generateWithOpenAI = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 1500,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error.response.data);
    throw new Error('Failed to generate content with OpenAI');
  }
};

// Export the function correctly
export { generateWithOpenAI };

// backend/controllers/contentTypeController.js
import { generateWithOpenAI } from '../utils/openai.js';

const generateContentType = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Step 1: Use OpenAI to generate content type definitions based on the prompt
    const contentTypePrompt = `Generate a JSON schema for a content type based on the following description:\n\n${prompt}\n\nProvide the JSON schema.`;
    const contentTypeSchema = await generateWithOpenAI(contentTypePrompt);

    res.json({ contentTypeSchema });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Use named export
export { generateContentType };

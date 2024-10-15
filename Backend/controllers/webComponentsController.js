// backend/controllers/webComponentsController.js
import { generateWithOpenAI } from '../utils/openai.js';

const generateWebComponents = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Step 1: Use OpenAI to generate React components based on the prompt
    const componentPrompt = `Generate React.js web components based on the following description:\n\n${prompt}\n\nProvide the code for each component.`;
    const componentsCode = await generateWithOpenAI(componentPrompt);

    res.json({ componentsCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Use named export
export { generateWebComponents };

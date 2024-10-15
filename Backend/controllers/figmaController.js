// backend/controllers/figmaController.js
import { generateWithOpenAI } from '../utils/openai.js';
import { createFigmaFile } from '../utils/figma.js'; // This remains unchanged

const generateFigmaDesign = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Step 1: Use OpenAI to generate design specifications
    const designSpecPrompt = `Generate a detailed Figma design specification based on the following description:\n\n${prompt}`;
    const designSpec = await generateWithOpenAI(designSpecPrompt);

    // Step 2: Create a Figma file (duplicating a template)
    const newFigmaFileId = await createFigmaFile(designSpec);

    // Note: To fully implement design specifications, you may need to use Figma Plugins or manual steps.

    res.json({ figmaFileId: newFigmaFileId, designSpec });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default generateFigmaDesign;

// backend/utils/figma.js
import axios from 'axios';  // Import axios as a default

const figmaToken = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;

const createFigmaFile = async (designData) => {
  const templateFileId = process.env.FIGMA_FILE_ID; // Template file ID
  try {
    const response = await axios.post(
      `https://api.figma.com/v1/files/${templateFileId}/copy`,
      {
        name: `Design_${Date.now()}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Figma-Token': figmaToken,
        },
      }
    );
    const newFileId = response.data.key;
    return newFileId;
  } catch (error) {
    console.error('Figma API Error:', error.response.data);
    throw new Error('Failed to create Figma file');
  }
};

// Export the createFigmaFile function directly
export { createFigmaFile };

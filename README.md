Design Tool Automation
=============

**Introduction**

This project aims to create a web application that utilizes AI to assist in the design and development process by automating the generation of Figma design specifications, React components, and content type schemas. The application integrates a **large language model (LLM)** through the **OpenAI API** to enable users to generate detailed design specifications based on their descriptions, automatically produce React component code, and create JSON schemas for content types. This automation not only enhances productivity but also ensures consistency and creativity in the development workflow.

**Features**

- **Figma Design Specification Generation**: Automatically generates detailed design specifications for Figma files based on user input.
- **React Component Generation**: Quickly generates React components based on user descriptions.
- **JSON Schema Generation**: Produces JSON schemas for content types according to user-defined specifications.

**Tech Stack**

- **Frontend**: React.js, Axios, CSS
- **Backend**: Node.js, Express, Axios
- **API**: OpenAI API for LLM integration
- **Figma API**: For creating and managing Figma files

**Installation**

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add your API keys:
     ```
     OPENAI_API_KEY=your_openai_api_key
     FIGMA_PERSONAL_ACCESS_TOKEN=your_figma_access_token
     FIGMA_FILE_ID=your_figma_template_file_id
     ```
5. Start the backend server:
   ```
   npm start
   ```
6. Open a new terminal, navigate to the `frontend` directory, and install dependencies:
   ```
   cd frontend
   npm install
   ```
7. Start the frontend application:
   ```
   npm start
   ```

**Usage**

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the application to generate design specifications, React components, or JSON schemas based on your inputs.

**Contributing**

If you'd like to contribute to this project, please fork the repository and submit a pull request.

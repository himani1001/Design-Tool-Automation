import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>AI Design Generator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/figma-generator">Generate Figma Design</Link>
          </li>
          <li>
            <Link to="/component-generator">Generate Web Components</Link>
          </li>
          <li>
            <Link to="/content-type-generator">Generate Content Type</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

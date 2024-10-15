import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FigmaGenerator from './pages/FigmaGenerator';
import ComponentGenerator from './pages/ComponentGenerator';
import ContentTypeGenerator from './pages/ContentTypeGenerator';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/figma-generator" element={<FigmaGenerator />} />
          <Route path="/component-generator" element={<ComponentGenerator />} />
          <Route path="/content-type-generator" element={<ContentTypeGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

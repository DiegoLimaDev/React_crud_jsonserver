import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';

const Container = styled.div`
  font-size: 62.5%;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route exat path="/" element={<Home />} />
          <Route exat path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;

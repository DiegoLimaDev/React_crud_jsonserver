import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import P from 'prop-types';

const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  padding: 1rem;
`;

const Text = styled.p`
  color: ${theme.colors.white};
  font-size: 1.5rem;
`;

export const Topbar = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

Topbar.propTypes = {
  children: P.string,
};

import { Icon } from '@iconify/react';
import React from 'react';
import styled, { css } from 'styled-components';
import P from 'prop-types';
import { theme } from '../utils/theme';

const Button = styled.button`
  ${({ type, able }) => css`
    background-color: ${type === 'save' && able === true
      ? theme.colors.grey
      : type === 'save'
      ? theme.colors.green
      : type === 'cancel'
      ? theme.colors.red
      : theme.colors.secondaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 2rem;
    padding: 0.5rem;
    margin: 2rem;
    border: none;
    width: 7rem;
    height: 2.5rem;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  `}

  :hover {
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
  }
`;

const Text = styled.p`
  color: ${theme.colors.white};
  font-size: 1rem;
`;

export const MyAddButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon
        icon="carbon:add-alt"
        color={theme.colors.white}
        width="25"
        height="25"
      />
      <Text>Cliente</Text>
    </Button>
  );
};

MyAddButton.propTypes = {
  onClick: P.func,
};

export const CreateButton = ({ onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled} able={disabled} type="save">
      <Text>Salvar</Text>
    </Button>
  );
};

CreateButton.propTypes = {
  onClick: P.node,
  disabled: P.node,
};

export const CancelButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="cancel">
      <Text>Cancelar</Text>
    </Button>
  );
};

CancelButton.propTypes = {
  onClick: P.node,
};

export const UpdateButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="save">
      <Text>Salvar</Text>
    </Button>
  );
};

UpdateButton.propTypes = {
  onClick: P.node,
};

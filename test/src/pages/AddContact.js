import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CancelButton, CreateButton } from '../components/Button';
import { Topbar } from '../components/Topbar';
import { handleChange } from '../services/Handler';
import { theme } from '../utils/theme';

const Container = styled.div``;

const Padding = styled.div`
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const HorizontalSeparator = styled.div`
  margin: 0 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkbox = styled.input`
  border-radius: 100%;
`;

const TextInput = styled.input`
  ${({ width }) => css`
    border-radius: 2rem;
    border: 1px solid;
    width: ${width}rem;
    padding: 0.3rem;
  `}
`;

const Text = styled.p`
  ${({ title }) => css`
    color: ${title === 'title'
      ? theme.colors.primaryColor
      : theme.colors.black};
    font-size: ${title === 'title' ? '1.5rem' : '1.2rem'};
  `}
`;

const AddContact = () => {
  const navigation = useNavigate();
  const [document, setDocument] = useState('PJ');
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [fantasyName, setFantasyName] = useState('');

  const create = async () =>
    await axios.post('http://localhost:3010/data', {
      document: document,
      active: active,
      name: name,
      fantasyName: fantasyName,
    });

  return (
    <Container>
      <Topbar>Cadastro/Clientes/Cadastrar Cliente</Topbar>
      <Padding>
        <Text title="title">Adicionar novo cliente</Text>
        <Row>
          <Text>Tipo:</Text>
          <Checkbox
            type="checkbox"
            checked={document === 'PF' ? true : false}
            onClick={() =>
              document !== 'PF' ? setDocument('PF') : setDocument('')
            }
          />
          <Text>Pessoa física</Text>
          <HorizontalSeparator />
          <Checkbox
            type="checkbox"
            checked={document === 'PJ' ? true : false}
            onClick={() =>
              document !== 'PJ' ? setDocument('PJ') : setDocument('')
            }
          />
          <Text>Pessoa Jurídica</Text>
        </Row>
        <Row>
          <Column>
            <Text>Razão Social</Text>
            <TextInput
              type="text"
              width="20"
              value={name}
              onChange={(e) => handleChange(setName, e)}
            />
          </Column>
          <HorizontalSeparator />
          <Column>
            <Text>Nome Fantasia</Text>
            <TextInput
              type="text"
              width="20"
              value={fantasyName}
              onChange={(e) => handleChange(setFantasyName, e)}
            />
          </Column>
          <HorizontalSeparator />
          <Checkbox
            type="checkbox"
            checked={active}
            onClick={() => setActive(!active)}
          />
          <Text>Ativo</Text>
        </Row>
        <Row>
          <CreateButton
            onClick={() => {
              create();
              setDocument('');
              setActive(false);
              navigation('/');
            }}
          />
          <HorizontalSeparator />
          <CancelButton onClick={() => navigation('/')} />
        </Row>
      </Padding>
    </Container>
  );
};

export default AddContact;

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PFForm } from '../components/PF_form';
import { PJForm } from '../components/PJ_form';
import { Topbar } from '../components/Topbar';
import { theme } from '../utils/theme';

const Container = styled.div`
  width: 100%;
`;

const Padding = styled.div`
  padding: 2rem;
  width: 80%;
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

const Checkbox = styled.input`
  border-radius: 100%;
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
  const [document, setDocument] = useState('PJ');

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
        <PJForm visible={document} />
        <PFForm visible={document} />
      </Padding>
    </Container>
  );
};

export default AddContact;

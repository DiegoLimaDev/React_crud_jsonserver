import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import P from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { handleChange } from '../services/Handler';
import { CancelButton, CreateButton } from './Button';
import axios from 'axios';
import InputMask from 'react-input-mask';

const Visible = () => css`
  width: 100%;
  height: 100%;
  visibility: visible;
`;

const Invisible = () => css`
  width: 0;
  height: 0;
  visibility: hidden;
`;

const Container = styled.div`
  ${({ visible }) => css`
    ${visible === 'PF' ? Visible() : Invisible()}
  `}

  .inputMask {
    border-radius: 2rem;
    border: 1px solid;
    width: 20rem;
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
`;

const HorizontalSeparator = styled.div`
  margin: 0 2rem;
`;

const VerticalSeparator = styled.div`
  margin: 4rem 0;
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
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
  `}
`;

const SelectInput = styled.select`
  border-radius: 2rem;
  border: 1px solid;
  width: 10rem;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
`;

const ObsInput = styled.textarea`
  ${({ width, height }) => css`
    border-radius: 2rem;
    border: 1px solid;
    width: ${width}rem;
    height: ${height}rem;
    padding: 1.5rem 0.5rem;
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

export const PFForm = ({ visible }) => {
  const navigation = useNavigate();
  const document = 'PF';
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [marital, setMarital] = useState('');
  const [rg, setRg] = useState('');
  const [agency, setAgency] = useState('');
  const [uf, setUf] = useState('');
  const [obs, setObs] = useState('');

  const create = async () =>
    await axios.post('http://localhost:3010/data', {
      document: document,
      name: name,
      surname: surname,
      cpf: cpf,
      birthday: birthday,
      marital: marital,
      rg: rg,
      agency: agency,
      uf: uf,
      obs: obs,
    });

  return (
    <Container visible={visible}>
      <Row>
        <Column>
          <Text>Nome completo*</Text>
          <TextInput
            type="text"
            width="20"
            value={name}
            onChange={(e) => handleChange(setName, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Apelido</Text>
          <TextInput
            type="text"
            width="20"
            value={surname}
            onChange={(e) => handleChange(setSurname, e)}
          />
        </Column>
        <HorizontalSeparator />
      </Row>
      <Row>
        <Column>
          <Text>CPF*</Text>
          <InputMask
            mask="999.999.999-99"
            type="text"
            value={cpf}
            onChange={(e) => handleChange(setCpf, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Data de Nascimento</Text>
          <InputMask
            mask="99/99/9999"
            type="text"
            width="20"
            value={birthday}
            onChange={(e) => handleChange(setBirthday, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Estado Civil</Text>
          <SelectInput onChange={(e) => handleChange(setMarital, e)}>
            <option defaultValue={true}>--</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="viúvo">Viúvo</option>
            <option value="nda">Prefiro não declarar</option>
          </SelectInput>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>RG/RNE</Text>
          <TextInput
            type="text"
            width="20"
            value={rg}
            onChange={(e) => handleChange(setRg, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Orgão emissor</Text>
          <TextInput
            type="text"
            width="20"
            value={agency}
            onChange={(e) => handleChange(setAgency, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>UF</Text>
          <TextInput
            type="text"
            width="5"
            value={uf}
            onChange={(e) => handleChange(setUf, e)}
          />
        </Column>
      </Row>
      <Text>Observação:</Text>
      <ObsInput
        type="text"
        width="40"
        height="8"
        value={obs}
        onChange={(e) => handleChange(setObs, e)}
      />

      <Row>
        <CreateButton
          // disabled={
          //   name.length < 1 ||
          //   ie.length < 1 ||
          //   im.length < 1 ||
          //   email.length < 1 ||
          //   cep.length < 1 ||
          //   address.length < 1 ||
          //   number.length < 1 ||
          //   district.length < 1 ||
          //   city.length < 1 ||
          //   uf.length < 2
          //     ? true
          //     : false
          // }
          onClick={() => {
            create();
            navigation('/');
          }}
        />
        <HorizontalSeparator />
        <CancelButton onClick={() => navigation('/')} />
      </Row>
    </Container>
  );
};

PFForm.propTypes = {
  visible: P.node.isRequired,
};

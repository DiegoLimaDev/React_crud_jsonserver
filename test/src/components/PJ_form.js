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
    ${visible === 'PJ' ? Visible() : Invisible()}
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

export const PJForm = ({ visible }) => {
  const navigation = useNavigate();
  const document = 'PJ';
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contributor, setContributor] = useState(true);
  const [ie, setIe] = useState('');
  const [im, setIm] = useState('');
  const [email, setEmail] = useState('');
  const [responsible, setResponsible] = useState('');
  const [responsibleCpf, setReponsibleCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [responsibleEmail, setResponsibleEmail] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [obs, setObs] = useState('');

  const create = async () =>
    await axios.post('http://localhost:3010/data', {
      document: document,
      active: active,
      name: name,
      fantasyName: fantasyName,
      cnpj: cnpj,
      contributor: contributor,
      ie: ie,
      im: im,
      email: email,
      responsible: responsible,
      responsibleCpf: responsibleCpf,
      birthday: birthday,
      tel: tel,
      cel: cel,
      responsibleEmail: responsibleEmail,
      cep: cep,
      city: city,
      uf: uf,
      address: address,
      number: number,
      complement: complement,
      district: district,
      obs: obs,
    });

  return (
    <Container visible={visible}>
      <Row>
        <Column>
          <Text>Razão Social*</Text>
          <TextInput
            type="text"
            width="20"
            value={name}
            onChange={(e) => handleChange(setName, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Nome Fantasia*</Text>
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
        <Column>
          <Text>CNPJ*</Text>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            value={cnpj}
            onChange={(e) => handleChange(setCnpj, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Text>Contribuinte:</Text>
        <Row>
          <Checkbox
            type="checkbox"
            checked={contributor === true ? true : false}
            onClick={() => setContributor(!contributor)}
          />
          <Text>Sim</Text>
          <HorizontalSeparator />
          <Checkbox
            type="checkbox"
            checked={contributor !== true ? true : false}
            onClick={() => setContributor(!contributor)}
          />
          <Text>Não</Text>
        </Row>
      </Row>
      <Row>
        <Column>
          <Text>Ins. Estadual*</Text>
          <TextInput
            type="text"
            width="20"
            value={ie}
            onChange={(e) => handleChange(setIe, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Ins. Municipal*</Text>
          <TextInput
            type="text"
            width="20"
            value={im}
            onChange={(e) => handleChange(setIm, e)}
          />
        </Column>
      </Row>
      <Text>Email*</Text>
      <TextInput
        type="text"
        width="20"
        value={email}
        onChange={(e) => handleChange(setEmail, e)}
      />
      <VerticalSeparator />
      <Text>Nome do responsável</Text>
      <TextInput
        type="text"
        width="20"
        value={responsible}
        onChange={(e) => handleChange(setResponsible, e)}
      />
      <Row>
        <Column>
          <Text>CPF</Text>
          <InputMask
            mask="999.999.999-99"
            type="text"
            width="20"
            value={responsibleCpf}
            onChange={(e) => handleChange(setReponsibleCpf, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Data de nascimento</Text>
          <InputMask
            mask="99/99/9999"
            type="text"
            width="20"
            value={birthday}
            onChange={(e) => handleChange(setBirthday, e)}
            className="inputMask"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>Telefone</Text>
          <InputMask
            mask="(99)99999-9999"
            type="text"
            width="20"
            value={tel}
            onChange={(e) => handleChange(setTel, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Celular</Text>
          <InputMask
            mask="(99)99999-9999"
            type="text"
            width="20"
            value={cel}
            onChange={(e) => handleChange(setCel, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Email do responsável</Text>
          <TextInput
            type="text"
            width="20"
            value={responsibleEmail}
            onChange={(e) => handleChange(setResponsibleEmail, e)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>CEP*</Text>
          <InputMask
            mask="99999-999"
            type="text"
            width="20"
            value={cep}
            onChange={(e) => handleChange(setCep, e)}
            className="inputMask"
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Cidade*</Text>
          <TextInput
            type="text"
            width="20"
            value={city}
            onChange={(e) => handleChange(setCity, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>UF*</Text>
          <TextInput
            type="text"
            width="5"
            maxLength={2}
            value={uf}
            onChange={(e) => handleChange(setUf, e)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>Endereço*</Text>
          <TextInput
            type="text"
            width="30"
            value={address}
            onChange={(e) => handleChange(setAddress, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Número*</Text>
          <TextInput
            type="text"
            width="5"
            value={number}
            onChange={(e) => handleChange(setNumber, e)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>Complemento</Text>
          <TextInput
            type="text"
            width="25"
            value={complement}
            onChange={(e) => handleChange(setComplement, e)}
          />
        </Column>
        <HorizontalSeparator />
        <Column>
          <Text>Bairro*</Text>
          <TextInput
            type="text"
            width="25"
            value={district}
            onChange={(e) => handleChange(setDistrict, e)}
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
          disabled={
            name.length < 1 ||
            fantasyName.length < 1 ||
            ie.length < 1 ||
            im.length < 1 ||
            email.length < 1 ||
            cep.length < 1 ||
            address.length < 1 ||
            number.length < 1 ||
            district.length < 1 ||
            city.length < 1 ||
            uf.length < 2
              ? true
              : false
          }
          onClick={() => {
            create();
            setActive(false);
            navigation('/');
          }}
        />
        <HorizontalSeparator />
        <CancelButton onClick={() => navigation('/')} />
      </Row>
    </Container>
  );
};

PJForm.propTypes = {
  visible: P.node.isRequired,
};

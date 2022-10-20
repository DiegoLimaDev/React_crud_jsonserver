import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CancelButton, UpdateButton } from '../components/Button';
import { PJForm } from '../components/PJ_form';
import { handleChange } from '../services/Handler';
import { theme } from '../utils/theme';

const Container = styled.div``;

const Padding = styled.div`
  padding: 2rem;
  width: 80%;
`;

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

const ContainerPJ = styled.div`
  ${({ visible }) => css`
    ${visible === 'PJ' ? Visible() : Invisible()};
  `}
`;

const ContainerPF = styled.div`
  ${({ visible }) => css`
    ${visible === 'PF' ? Visible() : Invisible()};
  `}
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

const Edit = () => {
  const location = useLocation();
  const state = location.state;
  const navigation = useNavigate();
  const visible = state.document;
  const [active, setActive] = useState(state.active);
  const [name, setName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contributor, setContributor] = useState(state.contributor);
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

  const update = async () =>
    await axios.put(`http://localhost:3010/data/${state.id}`, {
      document: document.length >= 1 ? document : state.document,
      active: active !== state.active ? active : state.active,
      name: name.length > 1 ? name : state.name,
      fantasyName: fantasyName.length >= 1 ? fantasyName : state.fantasyName,
      cnpj: cnpj.length >= 1 ? cnpj : state.cnpj,
      contributor:
        contributor !== state.contributor ? contributor : state.contributor,
      ie: ie.length >= 1 ? ie : state.ie,
      im: im.length >= 1 ? im : state.im,
      email: email.length >= 1 ? email : state.email,
      responsible: responsible.length >= 1 ? responsible : state.responsible,
      responsibleCpf:
        responsibleCpf.length >= 1 ? responsibleCpf : state.responsibleCpf,
      birthday: birthday.length >= 1 ? birthday : state.birthday,
      tel: tel.length >= 1 ? tel : state.tel,
      cel: cel.length >= 1 ? cel : state.cel,
      responsibleEmail:
        responsibleEmail.length >= 1
          ? responsibleEmail
          : state.responsibleEmail,
      cep: cep >= 1 ? cep : state.cep,
      city: city >= 1 ? city : state.city,
      uf: uf !== state.uf && uf.length === 2 ? uf : state.uf,
      address: address.length >= 1 ? address : state.address,
      number: number.length >= 1 ? number : state.number,
      complement: complement.length >= 1 ? complement : state.complement,
      district: district.length >= 1 ? district : state.district,
      obs: obs !== state.obs ? obs : state.obs,
    });

  return (
    <Container>
      <Padding>
        <ContainerPJ visible={visible}>
          <Row>
            <Column>
              <Text>Razão Social</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.name}
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
                placeholder={state.fantasyName}
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
              <Text>CNPJ</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.cnpj}
                value={cnpj}
                onChange={(e) => handleChange(setCnpj, e)}
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
              <Text>Ins. Estadual</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.ie}
                value={ie}
                onChange={(e) => handleChange(setIe, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Ins. Municipal</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.im}
                value={im}
                onChange={(e) => handleChange(setIm, e)}
              />
            </Column>
          </Row>
          <Text>Email</Text>
          <TextInput
            type="text"
            width="20"
            placeholder={state.email}
            value={email}
            onChange={(e) => handleChange(setEmail, e)}
          />
          <VerticalSeparator />
          <Text>Nome do responsável</Text>
          <TextInput
            type="text"
            width="20"
            placeholder={state.responsible}
            value={responsible}
            onChange={(e) => handleChange(setResponsible, e)}
          />
          <Row>
            <Column>
              <Text>CPF</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.responsibleCpf}
                value={responsibleCpf}
                onChange={(e) => handleChange(setReponsibleCpf, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Data de nascimento</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.birthday}
                value={birthday}
                onChange={(e) => handleChange(setBirthday, e)}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Text>Telefone</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.tel}
                value={tel}
                onChange={(e) => handleChange(setTel, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Celular</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.cel}
                value={cel}
                onChange={(e) => handleChange(setCel, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Email do responsável</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.responsibleEmail}
                value={responsibleEmail}
                onChange={(e) => handleChange(setResponsibleEmail, e)}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Text>CEP</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.cep}
                value={cep}
                onChange={(e) => handleChange(setCep, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Cidade</Text>
              <TextInput
                type="text"
                width="20"
                placeholder={state.city}
                value={city}
                onChange={(e) => handleChange(setCity, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>UF</Text>
              <TextInput
                type="text"
                width="5"
                maxLength={2}
                placeholder={state.uf}
                value={uf}
                onChange={(e) => handleChange(setUf, e)}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Text>Endereço</Text>
              <TextInput
                type="text"
                width="30"
                placeholder={state.address}
                value={address}
                onChange={(e) => handleChange(setAddress, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Número</Text>
              <TextInput
                type="text"
                width="5"
                placeholder={state.number}
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
                placeholder={state.complement}
                value={complement}
                onChange={(e) => handleChange(setComplement, e)}
              />
            </Column>
            <HorizontalSeparator />
            <Column>
              <Text>Bairro</Text>
              <TextInput
                type="text"
                width="25"
                placeholder={state.district}
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
            placeholder={state.obs}
            value={obs}
            onChange={(e) => handleChange(setObs, e)}
          />
          <Row>
            <UpdateButton
              onClick={() => {
                update();
                navigation('/');
              }}
            />
            <HorizontalSeparator />
            <CancelButton onClick={() => navigation('/')} />
          </Row>
        </ContainerPJ>

        <ContainerPF visible={visible}>
          <p>oi</p>
        </ContainerPF>
      </Padding>
    </Container>
  );
};

export default Edit;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { handleChange } from '../services/Handler';
import { Topbar } from '../components/Topbar';
import { MyAddButton } from '../components/Button';
import { theme } from '../utils/theme';

const Container = styled.div`
  /* font-size: 1.5rem; */
`;

const Table = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
  border: 1px solid;
  border-color: ${theme.colors.primaryColor};
  padding: 0.1rem;
`;

const TableRow = styled.tr`
  /* width: auto;
  height: 2rem; */
`;

const TableHead = styled.th`
  color: ${theme.colors.primaryColor};
  font-size: 1.5rem;
`;

const TableCell = styled.td`
  ${({ width }) => css`
    width: ${width}%;
    height: 3rem;
    text-align: center;
    border-top: 0.5px solid;
    padding: 0.1rem;
    color: ${theme.colors.primaryColor};
    font-size: 1.2rem;
  `}
`;

const Icons = styled.div`
  cursor: pointer;
`;

const Home = () => {
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3010/data').then((response) => {
      setData(response.data);
    });
  });

  const create = async () =>
    await axios.post('http://localhost:3010/data', {
      name: name,
      empresa: 'malucos',
    });

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3010/data/${id}`);
    const filtering = data.filter((item) => item.id !== id);
    setData(filtering);
  };

  const getById = (id) => {
    return data.find((data) => data.id === id);
  };

  return (
    <Container>
      <Topbar>Cadastro/Clientes</Topbar>
      <MyAddButton
        // onClick={() => {
        //   create();
        //   setName('');
        // }}
        onClick={() => navigation('/add')}
      >
        <p>adicionar</p>
      </MyAddButton>
      <Table>
        {/* <TableRow> */}
        <TableHead widTableHead="5">ID</TableHead>
        <TableHead widTableHead="15">NAME</TableHead>
        <TableHead widTableHead="20">CPF/CNPJ</TableHead>
        <TableHead widTableHead="20">EMAIL</TableHead>
        <TableHead widTableHead="20">TEL</TableHead>
        <TableHead widTableHead="20">CEL</TableHead>
        {/* </TableRow> */}
        {data.map((e) => {
          return (
            <TableRow key={e.id}>
              <TableCell width="5">{e.id}</TableCell>
              <TableCell width="15">{e.name}</TableCell>
              <TableCell width="20">{e.document}</TableCell>
              <TableCell width="20">{e.email}</TableCell>
              <TableCell width="20">{e.tel}</TableCell>
              <TableCell width="20">{e.cel}</TableCell>
              <TableCell>
                <Link to={`/edit/${e.id}`} state={getById(Number(e.id))}>
                  <Icon icon="clarity:note-edit-line" width="25" height="25" />
                </Link>
              </TableCell>
              <TableCell>
                <Icons>
                  <Icon
                    icon="fluent:delete-28-regular"
                    width="25"
                    height="25"
                    onClick={() => deleteData(e.id)}
                  />
                </Icons>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
      <input
        type="text"
        onChange={(e) => handleChange(setName, e)}
        value={name}
      />
    </Container>
  );
};

export default Home;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { handleChange } from '../services/Handler';

const Container = styled.div`
  font-size: 1.5rem;
`;

const Table = styled.table`
  width: 75%;
  display: block;
  margin: 0 auto;
`;

const TableRow = styled.tr`
  /* width: auto;
  height: 2rem; */
`;

const TableCell = styled.td`
  ${({ width }) => css`
    width: ${width}%;
    height: 3rem;
    text-align: center;
    border: 1px solid;
  `}
`;

const Icons = styled.Icon`
  cursor: pointer;
`;

const Home = () => {
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
      <Table>
        <TableRow>
          <th width="5">ID</th>
          <th width="15">NAME</th>
          <th width="20">CPF/CNPJ</th>
          <th width="20">EMAIL</th>
          <th width="20">TEL</th>
          <th width="20">CEL</th>
        </TableRow>
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
                  <Icons icon="clarity:note-edit-line" />
                </Link>
              </TableCell>
              <TableCell>
                <Icons
                  icon="fluent:delete-28-regular"
                  onClick={() => deleteData(e.id)}
                />
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
      <button
        onClick={() => {
          create();
          setName('');
        }}
      >
        <p>adicionar</p>
      </button>
    </Container>
  );
};

export default Home;

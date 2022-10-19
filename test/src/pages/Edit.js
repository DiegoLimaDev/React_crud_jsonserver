import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Edit = () => {
  // const { id } = useParams('id');
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:3010/data').then((response) => {
  //     setData(response.data);
  //   });
  // });

  // const getById = (id) => {
  //   return data.find((data) => data.id === id);
  // };
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <p>{state.name}</p>
    </div>
  );
};

export default Edit;

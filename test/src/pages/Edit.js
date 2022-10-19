import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleChange } from '../services/Handler';

const Edit = () => {
  const location = useLocation();
  const state = location.state;
  const navigation = useNavigate();
  const [name, setName] = useState('');

  const update = async () =>
    await axios.put(`http://localhost:3010/data/${state.id}`, { name: name });

  return (
    <div>
      <input
        type="text"
        placeholder={state.name}
        value={name}
        onChange={(e) => handleChange(setName, e)}
      />
      <button
        onClick={() => {
          update();
          navigation('/');
        }}
      >
        <p>update</p>
      </button>
    </div>
  );
};

export default Edit;

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Landing = props => {
  const [name, setName] = useState('justin');
  const [header, setHeader] = useState('');

  const handleChange = e => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setHeader(name)
  }
  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange}/>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default Landing;

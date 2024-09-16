import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from './logo.svg';
import './App.css';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Eesnimi"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Perekonnanimi"
          defaultValue=""
        />
        <br />
        <Button id="formnupp" variant="contained">Saada</Button>
      </div>
    </Box>
  );
}


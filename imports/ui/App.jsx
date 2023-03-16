import React from 'react';
import { ContactForm } from './ContactForm';
import { ContcatList } from './ContactList';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './ButtonAppBar';



export const App = () => (
  <div>
    <ButtonAppBar></ButtonAppBar>
      <Grid container spacing={2} className="fondo" justifyContent="center">
        <Grid item xs={5} justifyContent="center">
          <ContactForm></ContactForm>
        </Grid>
        <Grid item xs={5} justifyContent="center">
          <ContcatList></ContcatList>
        </Grid>
        </Grid>
  </div>
);

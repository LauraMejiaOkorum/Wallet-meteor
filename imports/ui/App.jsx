import React from 'react';
import { ContactForm } from './ContactForm';
import { ContcatList } from './ContactList';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './ButtonAppBar';
import { Wallet } from './Wallet';



export const App = () => (
  <div>
    <Grid container spacing={2} justifyContent="center" >
    <Grid item xs={12}>
        <ButtonAppBar></ButtonAppBar>
      </Grid>
      <Grid item xs={4} className="card">
        <Wallet></Wallet>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5} justifyContent="center">
          <ContactForm></ContactForm>
        </Grid>
        <Grid item xs={5} justifyContent="center">
          <ContcatList></ContcatList>
        </Grid>
      </Grid>
      </Grid>
  </div>
);

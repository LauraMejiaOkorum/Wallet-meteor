import React from 'react';
import { ContactForm } from './ContactForm';
import { ContcatList } from './ContactList';
import Grid from '@mui/material/Grid';


export const App = () => (
  <div>
      <Grid container spacing={10} >
        <Grid item xs={6}>
          <h1 className='listC'>Wallet Meteor</h1>
          <ContactForm></ContactForm>
        </Grid>
        <Grid item xs={6}>
          <ContcatList></ContcatList>
        </Grid>
        </Grid>
    
    
    
  </div>
);

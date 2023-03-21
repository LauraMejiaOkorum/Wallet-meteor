import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectContact = ({contact, setContact, contacts}) => {

    return (
        <div>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Contact</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="contact"
                    value={contact ||" "}
                    label="Contact"
                    onChange={ (e) => setContact(e.target.value)}
                    margin = "dense"
                >
                    {
                        contacts.map(contact => <MenuItem key={contact._id} value={contact}>{contact.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
        </div>
    );
}
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ContactsCollection } from '../api/ContactsCollection';
import SendIcon from '@mui/icons-material/Send';



export const ContactForm = () => {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [imageUrl, setImageUrl] = useState(" ");

    const saveContact = () => {
        console.log({ name, email, imageUrl });
        ContactsCollection.insert({
            name,
            email,
            imageUrl
        })
        setName("");
        setEmail("");
        setImageUrl("");
    }
    return (
        <div>
            <h1 className='listC'>Add a new contact</h1>
                <form>
                    <div>
                        <TextField
                            id="name"
                            label="Name"
                            margin='dense'
                            value={name}
                            fullWidth
                            size='small'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            margin='dense'
                            fullWidth
                            value={email}
                            size='small'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="imageUrl"
                            label="ImageUrl"
                            margin='dense'
                            value={imageUrl}
                            fullWidth
                            size='small'
                            onChange={e => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className='buton'>
                        <Button type='button' variant="contained" onClick={saveContact} endIcon={<SendIcon />}>
                            Save Contact
                        </Button>
                    </div>
                </form>
        </div>
    )
}
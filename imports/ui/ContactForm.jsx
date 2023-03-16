import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ContactsCollection } from '../api/ContactsCollection';



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
                <form>
                    <div>
                        <TextField
                            id="name"
                            label="Name"
                            margin='dense'
                            value={name}
                            fullWidth
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
                            onChange={e => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className='buton'>
                        <Button type='button' variant="contained" onClick={saveContact}>
                            Save Contact
                        </Button>
                    </div>
                </form>
        </div>
    )
}
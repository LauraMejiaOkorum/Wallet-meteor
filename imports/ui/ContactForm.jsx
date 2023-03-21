import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Meteor} from "meteor/meteor"
import ErrorAlert from './components/ErrorAlert';
import SuccessAlert from './components/SuccessAlert';





export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [wallet, setWallet] = useState("");

    
    const saveContact = () => {
        //ContactsCollection.insert({name,email,imageUrl})
        Meteor.call("insertContact", {name, email, wallet, imageUrl}, (errorResponse) => {
            if (errorResponse){
                setError(errorResponse.error);
                setTimeout(() => {
                    setError("")
                }, 3000)
            }else{
                setName("");
                setEmail("");
                setWallet("");
                setImageUrl("");
                setSuccess("contact saved successfully")
                setTimeout(() => {
                    setSuccess("")
                }, 3000)
            }
        })
    }
    return (
        <div>
            <h1 className='listC'>Add a new contact</h1>
                <form>
                    {
                        error ? <ErrorAlert message={error}/>: null
                    }
                    {
                        success ? <SuccessAlert message={success}></SuccessAlert>: null
                    }
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
                            id="wallet"
                            label="Wallet id"
                            type= "number"
                            margin='dense'
                            fullWidth
                            value={wallet}
                            size='small'
                            onChange={e => setWallet(e.target.value)}
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
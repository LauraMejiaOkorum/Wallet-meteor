import React from 'react';
import { ContactsCollection } from '../api/collections/ContactsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UpdateIcon from '@mui/icons-material/Update';
import ArchiveIcon from '@mui/icons-material/Archive';


export const ContcatList = () => {
    const isloading = useSubscribe("Contacts");
    const contact = useFind(() => ContactsCollection.find({archived:{$ne: true}}, {sort: {createdat: -1}}))

    const deleteContact = (_id) => {
        Meteor.call("deleteContact", {_id})
    }

    const archiveContact = (_id) => {
        Meteor.call("ArchiveContact", {_id})
    }

    if(isloading()){
        return (
        <div>
            <h1 className='listC'>Contact List </h1>
            <h6 className='load'>Loading data...</h6>
        </div>)
    }
    return (
        <div>
            <h1 className='listC'>Contact List </h1>
            {
                contact.map(contact =>
                    <List key={contact._id} sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={contact.imageUrl} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={contact.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'block' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        <strong>wallet id: </strong>{contact.wallet}
                                        </Typography>
                                        {contact.email}
                                    </React.Fragment>
                                }
                            />
                            <IconButton edge="end" aria-label="delete">
                                <UpdateIcon color='primary'/>
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => archiveContact(contact._id)}>
                            <ArchiveIcon color='primary'/>
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteContact(contact._id)}>
                            <DeleteIcon color='primary'/>
                            </IconButton>
                        </ListItem>
                    </List>
                )
            }
        </div>
    )
}
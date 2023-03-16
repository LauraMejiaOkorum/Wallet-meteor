import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import { useTracker } from 'meteor/react-meteor-data';
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
    const contact = useTracker(() => {
        return ContactsCollection.find({}).fetch()
    })

    return (
        <div>
            <h1 className='listC'>Contact List </h1>
            {
                contact.map(contact =>
                    <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
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
                                        wallet id
                                        </Typography>
                                        {contact.email}
                                    </React.Fragment>
                                }
                            />
                            <IconButton edge="end" aria-label="delete">
                                <UpdateIcon color='primary'/>
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                            <ArchiveIcon color='primary'/>
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                            <DeleteIcon color='primary'/>
                            </IconButton>
                        </ListItem>
                    </List>
                )
            }
        </div>
    )

}
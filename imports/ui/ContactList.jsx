import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import {useTracker} from 'meteor/react-meteor-data';

export const ContcatList = () =>{
    const contact = useTracker(() => {
        return ContactsCollection.find({}).fetch() })
    
    return(
        <div>
            <h1 className='listC'>List Contact</h1>
            {
                contact.map(contact => <li key={contact.email}>{contact.name}   -  {contact.email}</li>)
            }
        </div>
    )

}
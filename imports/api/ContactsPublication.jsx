import { ContactsCollection } from "./ContactsCollection"
import {Meteor} from "meteor/meteor"


Meteor.publish("allContact", function allContact(){
    return ContactsCollection.find({})
})

Meteor.publish("Contacts", function Contacts(){
    return ContactsCollection.find({archived:{$ne: true}})
})
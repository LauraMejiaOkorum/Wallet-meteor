import { ContactsCollection } from "./ContactsCollection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";




Meteor.methods({
    "insertContact"({name, email, imageUrl}){
        if(!name){
            throw new Meteor.Error("Name is required.");
        }
        check(name, String);
        check(email, String);
        return ContactsCollection.insert({
        name,
        email,
        imageUrl,
        createdat: new Date()
    })},

    "deleteContact"({_id}){
        return ContactsCollection.remove({_id })
    },

    "ArchiveContact"({_id}){
        return ContactsCollection.update({_id}, {$set:{archived: true}})
    }
})
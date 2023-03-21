import { ContactsCollection } from "../collections/ContactsCollection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";




Meteor.methods({
    "insertContact"({name, email, wallet, imageUrl}){
        if(!name){
            throw new Meteor.Error("Name is required.");
        }
        if(!wallet){
            throw new Meteor.Error("Wallet Id is required.");
        }
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        return ContactsCollection.insert({
        name,
        email,
        wallet,
        imageUrl,
        createdAt: new Date()
    })},

    "deleteContact"({_id}){
        return ContactsCollection.remove({_id })
    },

    "ArchiveContact"({_id}){
        return ContactsCollection.update({_id}, {$set:{archived: true}})
    }
})
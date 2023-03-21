import 'meteor/meteor';
import '../imports/api/collections/ContactsCollection';
import '../imports/api/methods/ContactsMethods';
import '../imports/api/publications/ContactsPublication';
import '../imports/api/collections/WalletsCollection'
import '../imports/api/collections/TransactionsCollection';
import "../imports/api/methods/TransactionMethods"
import { WalletsCollection } from '../imports/api/collections/WalletsCollection';
import  "../imports/api/publications/WalletsPublication"
import "../infra/CustomError"




Meteor.startup(() => {
    if(!WalletsCollection.find().count()){
        WalletsCollection.insert({
        createdAt: new Date
    })
    }});


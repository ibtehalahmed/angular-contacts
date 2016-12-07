/**
 * Created by ibtehal on 28/11/16.
 */
'use strict';

(function () {

    function ContactService() {
        var contacts = [{id: 1, name: "Aly", phone: "123123", address: "Alex"},
            {id: 2, name: "Samy", phone: "000333", address: "Cairo"},
            {id: 3, name: "Mohammed", phone: "777666", address: "Banha"},
            {id: 4, name: "Ahmed", phone: "11122211", address: "Tanta"},
            {id: 5, name: "Adel", phone: "777666", address: "Damenhour"}
        ];
        var Contact = {
            addContact(contact)
        {
            contact.id = contacts.length + 1
            console.log(contact)
            contacts.push(contact);
            console.log(contacts)
        }
    ,
        getContacts()
        {
            console.log("111111", contacts)
            return contacts
        }
    ,
        getContactById(id)
        {
            return contacts[id - 1]
        }
    ,
        updateContact(id, contact)
        {
            contacts[id - 1] = contact;

        }
    ,
        deleteContact(id)
        {
            console.log("oooooooo", id)
            contacts.splice(id - 1, 1)
                console.log("oooooooo", contacts[i].id)
        }
    };

    return Contact;
}

angular.module('newApp3App')
    .factory('Contact', ContactService);

})
();

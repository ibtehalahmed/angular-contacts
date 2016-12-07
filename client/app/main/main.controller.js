'use strict';

(function () {

  class MainController {

    constructor(Contact, $state) {
      this.Contact = Contact;
      this.contacts = Contact.getContacts()
      this.$state = $state

      this.gems = {
        name: "name1",
        price: "price1",
        description: "----"
      };
    }
    callAddContact = function(contact) {
      this.Contact.addContact(contact);
      this.$state.go('main')
    }
    update(contact){
      this.$state.go('contact',{contactId: contact.id});
    }
    deleteContact(id){
        this.Contact.deleteContact(id);
        this.$state.go('main')
    }
  /*callNotify = function(msg) {
    this.Notify.notify(msg);
  };*/

  }
  MainController.$inject = ['Contact','$state'];
  angular.module('newApp3App')
    .controller('MainController', MainController);

})();

'use strict';

(function () {

    class ContactController {
        constructor(Contact, $state, $stateParams) {
            this.Contact = Contact;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.id = $stateParams.contactId;
            if(this.id != null){
                this.contact =  Contact.getContactById(this.id)
            }

        }
        save(form) {
            this.submitted = true;
            if (form.$valid) {
                if (this.id) {
                    this.Contact.updateContact(this.id, this.contact);
                }
                else{
                    this.Contact.addContact(this.contact);
                }
                this.$state.go('main');
            }
        }
}

angular.module('newApp3App')
    .controller('ContactController', ContactController);

})
();

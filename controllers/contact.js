Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions:{
    sendMessage : function(){
      var message = prompt('Type message here:');
      this.set('confirmationNumber', Math.round(Math.random() * 10000));
      this.set('messageSent', true);
    }
  }
});

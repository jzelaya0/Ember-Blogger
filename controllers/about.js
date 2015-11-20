Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false, // to use in template
  actions: {
    showRealName: function(){
      alert('Dracula is fictional, but was inspired by the 15th century Wallachian Prince Vlad III the Impaler');
    },
    showPicture: function(){
      //Ember depends on .set() to obeserve changes in objects properties
      this.set('isPictureShowing', true);
    }
  }
});

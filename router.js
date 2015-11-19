//Blogger refers to app.js
Blogger.Router.map(function(){
  //This is where routes are set
  this.resource('posts', {path: '/'});//Set as homepage(overrides default)
  this.resource('about');
  this.resource('contact',function() {//Nested Route
    this.resource('phone');
    this.resource('email');
  });

})

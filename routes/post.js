Blogger.PostRoute = Ember.Route.extend({
  model: function(params){
    //ember property to look for post id
    return this.store.find('post', params.post_id)
  }
})

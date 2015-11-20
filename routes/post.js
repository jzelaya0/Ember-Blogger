Blogger.PostRoute = Ember.Route.extend({
  model: function(params){
    //ember property to look for post id
    return posts.findBy('id', params.post_id)
  }
})

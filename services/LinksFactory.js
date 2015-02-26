nerdNews.factory("LinksFactory", function LinksFactory($location){
  var factory = {};
  factory.links = [{description: "misophonia", address: "http://well.blogs.nytimes.com/2015/02/23/please-stop-making-that-noise/", votes: 0, id: 1},
{description: "Synesthesia - Rare but real", address: "http://www.npr.org/programs/invisibilia/382451600/entanglement?showDate=2015-01-30", votes: 0, id: 2}];

  factory.addLink = function(){
    var link = {id: factory.links.length + 1, votes: 0, description: factory.linkDescription, address: factory.linkAddress};
    factory.links.push(link);
    factory.linkDescription = null;
    factory.linkAddress = null;

  };

  factory.upVote = function(id) {
    factory.links[id-1].votes += 1;
  };

  return factory;

});

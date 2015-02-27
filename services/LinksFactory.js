nerdNews.factory("LinksFactory", function LinksFactory(){
  var factory = {};
  factory.links = [{score: 100, description: "misophonia", address: "http://well.blogs.nytimes.com/2015/02/23/please-stop-making-that-noise/", votes: 0, id: 1, comments: []},
{score: 100, description: "Synesthesia - Rare but real", address: "http://www.npr.org/programs/invisibilia/382451600/entanglement?showDate=2015-01-30", votes: 0, id: 2, comments: []}];
  factory.links[0].time = new Date();
  factory.links[1].time = new Date();


  factory.addLink = function(){
    var link = {score: 100, id: factory.links.length + 1, votes: 0, description: factory.linkDescription, address: factory.linkAddress, comments: []};
    link.time = new Date();
    factory.changeScores();
    factory.links.push(link);
    factory.linkDescription = null;
    factory.linkAddress = null;
  };

  factory.changeScores = function(){
    for(var i=0; i<factory.links.length; i++){
      var currentTime = new Date();
      var timeDifference = currentTime - factory.links[i].time;
      factory.links[i].score = factory.links[i].score - timeDifference/30000;
    }
  };

  factory.upVote = function(id) {
    factory.links[id-1].votes += 1;
    factory.links[id-1].score += 5;
  };

  factory.addComment = function(id){
    factory.links[id-1].comments.push(factory.linkComments);
    factory.linkComments = null;
  };

  return factory;

});

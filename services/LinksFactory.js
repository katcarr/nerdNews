nerdNews.factory("LinksFactory", function LinksFactory(){
  var factory = {};
  factory.links = [{description: "misophonia", address: "http://well.blogs.nytimes.com/2015/02/23/please-stop-making-that-noise/"},
{description: "Synesthesia - Rare but real", address: "http://www.npr.org/programs/invisibilia/382451600/entanglement?showDate=2015-01-30"}];

  factory.addLink = function(){
    var link = {description: factory.linkDescription, address: factory.linkAddress};
    factory.links.push(link);
    factory.linkDescription = null;
    factory.linkAddress = null;


  };
  return factory;

});

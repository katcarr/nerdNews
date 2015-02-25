var nerdNews = angular.module("nerdNews", ['ui.router']);

nerdNews.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LinksCtrl"
  });

  $stateProvider.state('links', {
    url: "/addlink.html",
    templateUrl: "partials/addlink.html",
    controller: "LinksCtrl"
  });
});

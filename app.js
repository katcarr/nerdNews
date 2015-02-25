var nerdNews = angular.module("nerdNews", [ui.router]);

nerdNews.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('', {
    url: "/addlink.html",
    templateUrl: "partials/addlink.html",
    controller:
  });
});

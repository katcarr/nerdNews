var nerdNews = angular.module("nerdNews", ['ui.router','ui.bootstrap']);

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

  $stateProvider.state('newest', {
    url: "/newest.html",
    templateUrl: "partials/newest.html",
    controller: "LinksCtrl"
  });

  $stateProvider.state('popular', {
    url: "/popular.html",
    templateUrl: "partials/popular.html",
    controller: "LinksCtrl"
  });

});



nerdNews.controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

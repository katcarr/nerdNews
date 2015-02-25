nerdNews.controller("LinksCtrl",  function LinksCtrl($scope, $stateParams, LinksFactory){

  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
});

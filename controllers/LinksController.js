nerdNews.controller("LinksCtrl",  function LinksCtrl($scope, $state, $stateParams, LinksFactory){

  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  $scope.addLinkAndGo = function(){

    LinksFactory.addLink();
    $state.go("home");


  };


});

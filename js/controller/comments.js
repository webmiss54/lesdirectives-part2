app.controller('CommentsCtrl', function ($scope, Post, $routeParams, $rootScope) {

	$rootScope.loading = true;
	$scope.newComment = {};

	Post.get($routeParams.id).then(function(post){
		$rootScope.loading = false;
		$scope.post = post;
		$scope.comments = post.comments;	
	}, function (msg){
		alert(msg);
	})

	$scope.addComment = function(){
		//console.log($scope.newComment);
		$scope.comments.push($scope.newComment);
		Post.add($scope.newComment).then(function(){

		}, function(){
			alert('votre message n\'a pas pu etre sauvegardé');
		})
		$scope.newComment = {};
	}
	$scope.selectComment = function(){
			alert('Salut');
	}

});
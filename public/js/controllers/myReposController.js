angular.module('myApp')
.controller('myReposController', function($scope, GitService, $location, $rootScope) {

	var existantRepos, userRepos;
	$rootScope.pending=[];
	$rootScope.tagged=[];

	$scope.findRepos = function(e) {
		e.preventDefault();
		GitService.compareRepos($scope.gitUser)
		.then( function( response ) {
			existantRepos = response.data
			return GitService.getRepos($scope.gitUser)

		})
		.then( function(response) {
			$rootScope.userRepos=response.data
			})
		.then( function(data) {

			for (i=0; i<$rootScope.userRepos.length; i++){
				var exists=false
				for (j=0; j<existantRepos.length; j++){
					if($rootScope.userRepos[i].url === existantRepos[j].repo_url){
						exists=true}
					}
						if (exists===false){
					$rootScope.pending.push($rootScope.userRepos[i])}
			}
			// console.log($rootScope.pending)
			// console.log($rootScope.tagged)
			// console.log(existantRepos)
			// console.log(userRepos[0])
			$rootScope.pendings=$rootScope.pending
			$rootScope.pending=[];
			$rootScope.tagged=[];
	})
			GitService.getProfile($scope.gitUser)
			.then( function(response) {
				$rootScope.user = response.data.login;
				$rootScope.avatar = response.data.avatar_url;

				$location.path("/tagRepos")
			})	

		}
	})







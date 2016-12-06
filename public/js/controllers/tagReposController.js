 angular.module('myApp')
.controller('tagReposController', function($scope, $route, GitService, $location, $rootScope) {


	$rootScope.repo=[]
	$scope.insertTags = function(e, index, tags) {
		e.preventDefault();
		console.log(tags)
		console.log(index)

		$rootScope.repo=({
			name: $rootScope.pendings[index].name,
			html_url: $rootScope.pendings[index].html_url,
			repo_url: $rootScope.pendings[index].url,
			tags:tags,
			owner:$rootScope.pendings[index].owner.login,
			average:null,
			reviews:[{
				user_url: null,
				user_text: null,
				user_mark: null,
	}]
	// location.reload()
	})
	console.log($rootScope.repo)


		GitService.postRepo($rootScope.repo)
		.then ((response)=>{
			console.log(response)
		})

		.catch( err=> error("err catch"))


		$rootScope.pendings.splice([index], 1)
		console.log($rootScope.pendings)





 
		
	
	}

})
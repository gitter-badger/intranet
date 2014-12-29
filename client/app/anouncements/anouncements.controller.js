'use strict';

angular.module('intranetApp')
  .controller('AnouncementsCtrl', function ($scope,Anouncement,socket,$location,Auth) {


    $scope.anouncements = Anouncement.query(function(){
    	socket.syncUpdates('anouncement', $scope.anouncements);
    });


    $scope.detail = function(slug){
    	$location.path( "/anouncements/"+slug );
    };

    $scope.hasRead = function(user){
    	var has = false;
    	var CurrentUser = Auth.getCurrentUser();
    	_.each(user , function(value,index){
    		if(value == CurrentUser.name){
    			has = true;
    		}
    	});
    	var icon = (has === true) ? 'mdi-action-done' : 'mdi-action-info';
    	return icon;
    };

    $scope.trash = function(index){
      if(index || index === 0){
        Anouncement.remove({ id: $scope.anouncements[index]._id }, function(response){
          if(response){
            $scope.anouncements.splice(index, 1);
          }
        });
      }
    };

    $scope.edit = function(index){
      if(index || index === 0){
        $location.path('/anouncements/'+$scope.anouncements[index].slug+'/edit');
      }
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('anouncement');
    });

  })
  .controller('AnouncementDetailCtrl', function($scope, Anouncement, $location, $routeParams){

  	$scope.anouncement = {};

  	Anouncement.get({ id: $routeParams.slug }, function(response){
  		$scope.anouncement = response;
  	})

  })
  .controller('AnouncementEditCtrl', function($scope, Anouncement, $location, $routeParams){

    $scope.anouncement = Anouncement.get({ id: $routeParams.slug });


    $scope.submit = function(){
      if($scope.anouncement.title.length < 5){

      }
      else if($scope.anouncement.teaser.length < 5){
        
      }
      else if($scope.anouncement.text.length < 5){

      }
      else{

        Anouncement.update({ id: $scope.anouncement._id }, $scope.anouncement, 
            function success(response){
              $location.path('/anouncements/'+response.slug);
            },
            function err(e){
              console.log(e);
            }
        );
      }


    }



  })
  .controller('AnouncementAddCtrl', function($scope,Anouncement,$location){

  	$scope.anouncement = {
  		title: '',
  		text: '',
  		teaser: '',
  		active: false
  	};

  	$scope.submit = function(){
  		if($scope.anouncement.title.length < 5){

  		}
  		else if($scope.anouncement.teaser.length < 5){
  			
  		}
  		else if($scope.anouncement.text.length < 5){

  		}
  		else{

  			Anouncement.save({}, $scope.anouncement, 
            function success(response){
            	$location.path('/anouncements/'+response.slug);
            },
            function err(e){
              console.log(e);
            }
      	);
  		}


  	}

  

  });




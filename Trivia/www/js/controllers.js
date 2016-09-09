angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('logCtrl', function($scope,$stateParams,$state,$firebaseObject,$window){
     var ref = new Firebase("https://scoretrivia.firebaseio.com/");
     $scope.puntajes=$firebaseObject(ref);
        console.log($scope.puntajes);

      var contador=0;
   $scope.login=function(){
     if($scope.login.usuario==null){
       alert("DEBE INGRESAR UN NOMBRE DE USUARIO...");   
       }
     else{
      $scope.btnScore=true;
      $scope.btnreset=true;
      $scope.preg1=false;
      $scope.preg2=true;
      $scope.preg3=true;
      $scope.ocPuntajes=true;
      $scope.preguntas=true;
      $scope.Nusuario=$scope.login.usuario;
    console.log($scope.login.usuario);
    $scope.formvisibility=true;
     }
   };
    $scope.respuesta=function(res){
      console.log(res);
         
      if(res==0){
       $scope.res1=true;
       $scope.res2=true;
       $scope.preg1=true;
   $scope.preg2=false;
            
  
      } 
      if(res==1){
       $scope.res0=true;
       $scope.res2=true;
  $scope.preg1=true;    
     $scope.preg2=false;
         
      }
      if(res==2){
       $scope.res1=true;
       $scope.res0=true;
    $scope.preg1=true;
     $scope.preg2=false;
       
        contador+=10;
      
      }
      
  if(res==3){
       $scope.res4=true;
       $scope.res5=true;
       $scope.preg2=true;
       $scope.preg3=false;
       
      } 
      if(res==4){
       $scope.res3=true;
       $scope.res5=true;
      $scope.preg2=true;
      $scope.preg3=false;

      }
      if(res==5){
       $scope.res4=true;
       $scope.res3=true;
       contador+=10;
     $scope.preg2=true;
      $scope.preg3=false;

      }
      
       if(res==6){
       $scope.res7=true;
       $scope.res8=true;
       $scope.preg3=true;
        $scope.btnScore=false;
      } 
      if(res==7){
       $scope.res6=true;
       $scope.res8=true;
      $scope.preg3=true;
      $scope.btnScore=false;
      }
      if(res==8){
       $scope.res7=true;
       $scope.res6=true;
        contador+=10;
       $scope.preg3=true;
       $scope.btnScore=false;
      }
     console.log("Score="+contador);
   
    };
   $scope.reset=function(){
  document.location.href='index.html';
   };
     var flag;
   $scope.score=function(){
     if(contador>0 && flag!=1){
     console.log(contador);
     ref.push(contador);
    flag=1;
  $state.go('app.browse',{score:contador});
    }
    else{
      alert("NO OBTUVO NINGUN PUNTO...INTENTELO DE NUEVO..."); 
       $scope.btnreset=false;
       $scope.btnScore=true;
    }
     };
    
  })
.controller('browseCtrl', function($scope,$state){
  $scope.score= $state.params.score;
   $scope.resetear=function(){
  document.location.href='index.html';
};
  $scope.salir=function(){
    ionic.Platform.exitApp();

  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

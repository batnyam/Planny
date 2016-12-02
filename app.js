var app = angular.module('planny', ['ngMaterial', 'ngMessages']);
app.controller('PlannyController', function PlannyController($scope){
    $scope.appName = "Planny";
    $scope.dob = "";
    $scope.black = [];
    $scope.blacked = [];

    $scope.countries = [
      {
        name: 'Mongolia',
        value: 80,
      }
    ];

    $scope.submit = function(){
      //console.log($scope.dob);
      var year = new Date($scope.dob).getFullYear();
      var month = new Date($scope.dob).getMonth() + 1;
      var date = new Date($scope.dob).getUTCDate() + 1;
      if ( parseInt(month) < 10 ) month = '0'+month;
      var dob = year+'/'+month+'/'+date;
      var today = new Date();
      var dobDate = new Date(dob);
      var diff = Math.abs(today - dobDate);
      diff = parseInt(diff/1000/60/60/24/7);

      for(var i = 0; i < diff; i++ )
        $scope.black.push(i);

      var year1 = year + $scope.bon;
      var temp1 = new Date(year1+'/'+month+'/'+date);
      var futureDays = parseInt(Math.abs(temp1 - today)/1000/60/60/24/7);
      for(var i = 0; i < futureDays; i++)
        $scope.blacked.push(i);
    }
});

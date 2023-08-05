var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) { // Sửa tên controller thành "myCtrl"
  console.log("My controller....");
  
  $scope.users = [
    { name: "Thi", email: "dangkinthi@gmail.com", fullname: "Dang Kim Thi" },
    { name: "ThiDk", email: "thidk@gmail.com", fullname: "Thi DK" },
    { name: "CodeLean", email: "codelean@gmail.com", fullname: "Code Lean" }
  ];

  $scope.addUser = function () {
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    $scope.message = "New User Added successfully";
  };

  $scope.selectUser = function (user) {
    console.log(user);
    $scope.clickedUser = user;
  };

  $scope.editUser = function () {
    $scope.message = "User Edited successfully";
  };

  $scope.deleteUser = function () {
    // Sửa lỗi cú pháp, "indexOf" thay vì "index0f"
    $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    $scope.message = "User Deleted successfully";
  };

  $scope.clearMessage = function () {
    $scope.message = "";
  };
});

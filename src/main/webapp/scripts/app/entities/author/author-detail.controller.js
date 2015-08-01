'use strict';

angular.module('myapplicationApp')
    .controller('AuthorDetailController', function ($scope, $rootScope, $stateParams, entity, Author) {
        $scope.author = entity;
        $scope.load = function (id) {
            Author.get({id: id}, function(result) {
                $scope.author = result;
            });
        };
        $rootScope.$on('myapplicationApp:authorUpdate', function(event, result) {
            $scope.author = result;
        });
    });

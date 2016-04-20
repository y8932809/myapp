/**
 * Created by user on 2016-04-20.
 */
angular.module('starter.directives', [])
  .directive('registerFieldError', function ($compile) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var subScope = scope.$new(true);
        subScope.hasError = function () {
          //如果是无效格式并且用户输入过
          return ngModel.$invalid && ngModel.$dirty
        };
        subScope.errors = function () {
          return ngModel.$error;
        }
        var hint = $compile('<ul ng-if="hasError()"><li ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name|error}}</li></ul>')
        (subScope);
        element.after(hint);
      }
    };
  })
;

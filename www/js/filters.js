/**
 * Created by user on 2016-04-20.
 */
angular.module('starter.filters', [])
  .filter('error', function (Errors) {
    var message = {
      email: '不是有效的邮件地址',
      required: '此项不能为空'
    };
    return function (name) {
      return Errors[name] || name;
    }
  })

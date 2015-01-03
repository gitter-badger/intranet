'use strict';

angular.module('intranetApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getbirthdays: {
        method: 'GET',
        params: {
          id:'birthdays'
        },
        isArray: true
      },
      getteam: {
        method: 'GET',
        params: {
          id:'team'
        },
        isArray: true
      }
	  });
  });

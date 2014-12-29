'use strict';

angular.module('intranetApp')
  .factory('Anouncement', function ($resource) {
    return $resource(
        "/api/anouncements/:id",
        {id: "@id" },
        {    
            "query": { method: "GET", isArray: true },
            "update": { method: "PUT", isArray: false },
            "save": { method: "POST", isArray: false },
            "get": { method: "GET" },
            "remove": { method: "DELETE", isArray: false },

        }
    );

    
  });

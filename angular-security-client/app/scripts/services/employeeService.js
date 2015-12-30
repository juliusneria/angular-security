(function() {
    
    'use strict';
    
    angular.module('employeeManagerApp').factory('employeeService',['$http', 'API_BASE', function($http, API_BASE) {

        return {
            findAll: $http.get(API_BASE + '/api/admin/employee/all'),
            
            save: function (employee) {
                    return $http.post(API_BASE + '/api/admin/employee/save', { firstName: employee.firstName, lastName: employee.lastName, age: employee.age });
            }
        };
    }]);
    
})();
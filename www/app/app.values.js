var app;
(function (app) {
    var values;
    (function (values) {
        (function () {
            'use strict';
            var dataConfig = {
                baseUrl: 'https://jsonplaceholder.typicode.com/',
                userVehiclesUrl: 'users/:id/vehicles'
            };
            angular.module('psApp').value('dataConfig', dataConfig);
        })();
    })(values = app.values || (app.values = {}));
})(app || (app = {}));
//# sourceMappingURL=app.values.js.map
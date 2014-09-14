/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

interface IApp extends ng.IModule { }

var app: IApp = angular.module("app",
    [
        "iws.sticktop"
    ]);

// execute bootstrapping code and any dependencies.
app.run(["$q", "$rootScope", ($q: ng.IQService, $rootScope: ng.IRootScopeService): void => {
    // empty at the moment
}]);

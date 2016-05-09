import angular from 'angular';
import './components/reportSearch';
import './components/reportList';

angular.module('reports', ['reports.reportSearch', 'reports.reportList'/*, 'reports.active'*/]);

angular.bootstrap(document, ['reports']);

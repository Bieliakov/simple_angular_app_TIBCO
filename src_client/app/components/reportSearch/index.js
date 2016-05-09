import ReportSearchController from './reportSearch.controller.js'
import ReportSearchDirective from './reportSearch.directive.js';
import '../../common/services/report.factory.js';

export default angular.module('reports.reportSearch', ['reports.api'])
    .controller('ReportSearchController', ReportSearchController)
    .directive('reportSearch', ReportSearchDirective);
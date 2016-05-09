import ReportListController from './reportList.controller.js'
import ReportListDirective from './reportList.directive.js';
import '../../common/services/report.factory.js';

export default angular.module('reports.reportList', ['reports.api'])
    .controller('ReportListController', ReportListController)
    .directive('reportList', ReportListDirective);
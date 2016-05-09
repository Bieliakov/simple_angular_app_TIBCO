import template from './reportList.template.html';

class ReportListDirective {
    constructor(template) {
        this.restrict = 'EA';
        this.scope = {};
        this.controller = 'ReportListController';
        this.controllerAs = 'reportListCtrl';
        this.bindToController = true;
        this.replace = true;
        this.template = template;
    }

    static directiveFactory() {
        return new ReportListDirective(template);
    }
}

export default ReportListDirective.directiveFactory;
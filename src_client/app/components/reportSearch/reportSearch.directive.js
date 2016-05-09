
import template from './reportSearch.template.html';

class ReportSearchDirective {
    constructor(template) {
        this.restrict = 'EA';
        this.scope = {};
        this.controller = 'ReportSearchController';
        this.controllerAs = 'reportSearchCtrl';
        this.bindToController = true;
        this.replace = true;
        this.template = template;
    }

    static directiveFactory() {
        return new ReportSearchDirective(template);
    }
}

export default ReportSearchDirective.directiveFactory;
class ReportListController{
    constructor(SearchResult){
        let vm = this;

        SearchResult.getResults().then( (data) => {
            vm.reportList = data;
            return vm.reportList;
        });

    }
}

ReportListController.$inject = ['SearchResult'];

export default ReportListController;
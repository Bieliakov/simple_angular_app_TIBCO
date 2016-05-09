class ReportSearchController{
    constructor(SearchResult){
        let vm = this;
        vm.clickSearchButton = clickSearchButton;

        function clickSearchButton (searchText){
            SearchResult.getResults(searchText).then( (data) => {
                vm.searchResults = data;
                console.log('data', data);
                return vm.searchResults;
            });
        }
    }
}

// ReportSearchController.$inject = ['SearchResult'];

export default ReportSearchController;
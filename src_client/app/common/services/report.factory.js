class SearchModel{
    constructor($http){
        let apiUrl = 'http://localhost:3000/api/report/';

        return {
            getResults: getResults
        };

        function getResults (query) {
            return $http({
                method: 'GET',
                url: apiUrl/*,
                params: { q: query }*/
            })  .then(response => response.data.data)
                .catch(response => new Error(response));
        }
    }

    static factory($http) {
        return new SearchModel($http);
    }
}

SearchModel.factory.$inject = ['$http'];

export default angular.module('reports.api', [])
    .factory('SearchResult', SearchModel.factory);
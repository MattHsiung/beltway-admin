class ApiService {
	constructor($http) {
		 this.$http	= $http;	
	}
	getData(action, params) {
		return this.$http.get('/api/vs')
			.then(({data}) => data)
			.catch(({data}) => console.log('FAILED: ', data.message));
	}

};

ApiService.$inject = ['$http'];

export default ApiService;
class ApiService {
	constructor($http, $mdToast) {
		this.$http = $http;	
		this.$mdToast = $mdToast;
	}

	toast(message, err) {
		this.$mdToast.show(
      		this.$mdToast.simple()
		        .textContent(message)
		        .position('top right')
		        .hideDelay(3000)
    	);
	}

	getData(category, action, input) {
		return this.$http.post('/api/vs', {category, action, input})
			.then(({data}) => data)
			.catch(({data}) => this.toast(data.message, true));
	}

	getActions() {
		return this.$http.get('/api/vs/actions')
			.then(({data}) => data)
			.catch(({data}) => this.toast(data.message, true));
	}
};

ApiService.$inject = ['$http', '$mdToast'];

export default ApiService;
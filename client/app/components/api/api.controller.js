class ApiController {
  constructor(apiService) {
    this.apiService = apiService;
  }

  getData() {
  	this.apiService.getData(
  		this.selectedCategory,
  		this.selectedAction,
  		this.selectedOptions
    ).then(data => this.data = data);
  }

  getActions() {
  	if(this.actions) return;
  	this.apiService.getActions()
  		.then(actions => this.actions = actions);
  }

  $onInit() {
  	this.selectedOptions = null;
  	this.action = null;
  }
}

ApiController.$inject = ['apiService'];

export default ApiController;

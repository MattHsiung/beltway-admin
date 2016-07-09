class ApiController {
  constructor(apiService) {
    this.apiService = apiService;
  }

  $onInit() {
  	this.apiService.getData(
  		'CandidateBio.getBio',
  		'candidateId=9490'
    ).then(data => this.data = data);
  }
}

ApiController.$inject = ['apiService'];

export default ApiController;

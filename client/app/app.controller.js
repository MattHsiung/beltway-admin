class AppController {
	constructor(AuthFactory, $mdSidenav) {
		this.auth = null;
		this.$mdSidenav = $mdSidenav;
		this.AuthFactory = AuthFactory;
	}

	close() {
		this.$mdSidenav('left').toggle()
	}

	$onInit() {
      	this.auth = this.AuthFactory.getLoggedInUser();
      	if (this.AuthFactory.isAuthenticated()) this.AuthFactory.getUser();
    }
};

AppController.$inject = ['AuthFactory', '$mdSidenav'];

export default AppController;
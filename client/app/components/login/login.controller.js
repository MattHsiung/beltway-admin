class LoginController {
    constructor (AuthFactory, $state, $auth, $mdToast) {
        this.error = null;
        this.loginInfo = {};
        this.signupInfo = {};
        //Dependencies
        this.AuthFactory = AuthFactory;
        this.$state = $state;
        this.$auth = $auth;
        this.$mdToast = $mdToast;
    }
    
    resetError() {
        this.error = null;
    }

    toast(message) {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(message)
            .hideDelay(3000)
        );
    }

    login(loginInfo) {
        this.error = null;
        this.AuthFactory.login(loginInfo)
            .then(message => {
                (message) ? this.toast(message) : this.$state.go('home');
            });
    }

    signup(signupInfo) {
        this.error = null;
        this.AuthFactory.signup(signupInfo)
            .then(message => {
                (message) ? this.error = message : this.$state.go('home');
            });
    }

    authenticate(provider) {
        this.AuthFactory.authenticate(provider)
            .then(message => {
                (message) ? this.error = message : this.$state.go('home');
            });
    }
};

LoginController.$inject = ['AuthFactory', '$state', '$auth', '$mdToast'];

export default LoginController;
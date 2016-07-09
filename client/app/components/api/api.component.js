import template from './api.html';
import controller from './api.controller';
import './api.sass';

let apiComponent = {
  bindings: {
  	user: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default apiComponent;
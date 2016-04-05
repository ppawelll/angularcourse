import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './github.routes';
import GitHubController from './github.controller';

export default angular.module('app.github', [uirouter])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .name;
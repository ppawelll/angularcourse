import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import routing for this module
import routing from './github.routes';

// Import controllers for this module
import GitHubController from './github.controller';

// Import directives used by this module
import githubUser from './directives/github_user';

export default angular.module('app.github', [uirouter])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .directive('githubUser', githubUser)
  .name;
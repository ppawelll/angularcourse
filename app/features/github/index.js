import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import routing for this module
import routing from './github.routes';

// Import controllers for this module
import GitHubController from './github.controller';

// Import directives used by this module
import githubUser from './directives/github_user';
import userRepos from './directives/user_repos';

export default angular.module('app.github', [uirouter])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .directive('githubUser', githubUser)
  .directive('userRepos', userRepos)
  .name;
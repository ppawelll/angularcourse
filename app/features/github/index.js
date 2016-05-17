import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'firebase';
import angularFire from 'angularfire';

// Import routing for this module
import routing from './github.routes';

// Import controllers for this module
import GitHubController from './github.controller';

// Import cservicess for this module
import GitHubService from './github.service';

// Import directives used by this module
import githubUser from './directives/github_user';
import userRepos from './directives/user_repos';
import userInput from './directives/user_input';

// Import components
import githubNotes from './components/githubNotes';

export default angular.module('app.github', [uirouter, angularFire])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .service('GitHubService', GitHubService)
  .directive('githubUser', githubUser)
  .directive('userRepos', userRepos)
  .directive('userInput', userInput)
  .component('githubNotes', githubNotes)
  .name;
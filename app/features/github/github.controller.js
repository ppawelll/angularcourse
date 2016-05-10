export default class GitHubController {
  constructor($http) {
    this.$http = $http;
    
    this.getUser();
    this.getRepos();
  }
  
  getUser() {
    this.$http.get('https://api.github.com/users/bslipek')
      .then(this.handleGetUserSuccess.bind(this));
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  getRepos() {
    this.$http.get('https://api.github.com/users/bslipek/repos')
      .then(this.handleGetReposSuccess.bind(this));
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
 
}
export default class GitHubController {
  constructor(GitHubService) {
    
    GitHubService.getUser('bslipek')
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos('bslipek')
      .then(this.handleGetReposSuccess.bind(this));
      
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
 
}
/*global Firebase */
export default class GitHubController {
  constructor(GitHubService, $stateParams, $firebaseArray) {
    
    this.selectedUser = $stateParams.user
    
    GitHubService.getUser(this.selectedUser)
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos(this.selectedUser)
      .then(this.handleGetReposSuccess.bind(this));
      
    let ref = new Firebase("https://geoinformatyka.firebaseio.com/items");
    this.items = $firebaseArray(ref);

  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
  
  addNote() {
    this.data.$add({text: 'NOWY!'})
  }
 
}
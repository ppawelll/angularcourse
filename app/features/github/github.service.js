export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user + '?client_id=890dd92638638a6ca64c&client_secret=c400af0287a258d4f56f745e76b2d3b474d7e87a')
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos?client_id=890dd92638638a6ca64c&client_secret=c400af0287a258d4f56f745e76b2d3b474d7e87a')
  }
}
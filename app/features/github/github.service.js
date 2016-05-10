export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user)
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos')
  }
}
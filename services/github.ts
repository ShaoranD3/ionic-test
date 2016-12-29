import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GitHubService {
    constructor(private http: Http){
    }

    getRepos(username){
      let repo = this.http.get(`https://api.github.com/users/${username}/repos`);
      return repo;
    }
    getDetails(repo){
      let headers = new Headers();
      headers.append('Accept', 'application/vnd.github.VERSION.html');

      return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
}
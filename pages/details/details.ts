import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../services/github';
//import {DetailsPage} from '../details/details';

@Component({
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GitHubService,
  private nav: navController,
  private nav: navParams) {
  }

  this.repo = nav.Params.get('repo');
  this.github.getDetails(this.repo).subscribe(
    data => this.readme = data.text(),
    err => {
      if(err.status == 404){
        this.readme = 'Este repo no tiene un Readme';
      } else{
        console.error(err);
      }
    },
    () => console.log('getDetails completed')
  );

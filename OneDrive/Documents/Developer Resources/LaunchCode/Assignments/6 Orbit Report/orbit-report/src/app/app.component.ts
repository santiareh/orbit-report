import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  //Access satellite Class
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    let satellites;
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
        let fetchedSatellites = data.satellites;
        //Step 5: Fetch data
        // TODO: loop over satellites
        for(let i = 0; i < fetchedSatellites.length; i++){
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          satellites = fetchedSatellites[i];
          this.sourceList.push(satellites);
        }   
       }.bind(this));
    }.bind(this));
 }
}

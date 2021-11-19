import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/maps.service';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public lat=0;
  public lng=0;

 
  constructor(public locationService: LocationService) {

  }
  ngOnInit() {
    let location = this.getLocation();
    
  }
  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
    });
  }

  
}
   

    
  
  


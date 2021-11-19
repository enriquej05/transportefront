import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lat = 	21.15778923034668;
  lng = -86.87989807128906;

 lat2:string = '';
 lng2:string= '';
 country: string = '';
 city: string = '';
 continente: string='';
 region: string='';
 codigo_postal: number=0;
 constructor(private map: MapsService){}
  


  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat2 = data.latitude;
      this.lng2 = data.longitude;
      this.country = data.country_name;
      this.city = data.city;
      this.region = data.region_name;
      this.continente = data.continent_name;
      this.codigo_postal = data.zip;
    })
  }

}

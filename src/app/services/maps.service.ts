import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import{Location}from '../models/location';

interface Location {
  latitude: string;
  longitude:string;
  country_name:string;
  region_name:string;
  city:string,
  continent_name:string,
  zip: number,
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }
  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=b091a5d7b2c7b7834af9a1a6ce6411a5');
  }
  
}

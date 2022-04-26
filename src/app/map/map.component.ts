import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapa: any;
  lan: any = 0;
  lat: any = 0;

  allTeacher: any = {};


  constructor(private http: HttpClient) {
    this.http.get('https://localhost:44363/api/Account/GetTeacher/').subscribe((result) => {
      this.allTeacher = result;
    })
  }


  getLocation(lan: any, lat: any) {
    this.lan = lan;
    this.lat = lat;
    this.createMarker(this.lat, this.lan);
    console.log('the Location')
  }


  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [35.8389018, 32.5552896], // lan , lat 
      zoom: 6 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.createMarker(this.lan, this.lat);

  }

  createMarker(lng: any, lat: any) {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker.on('drag', () => {
      console.log('drage', marker.getLngLat())
    })
  }

}

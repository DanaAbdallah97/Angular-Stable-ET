import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl  from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 mapa : any;


  constructor() { }

  ngOnInit(): void {
    
    (mapboxgl as  any).accessToken =environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [35.8389018,32.5552896], // lan , lat 
    zoom: 6 // starting zoom
    });
     
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.createMarker(35.8389018,32.5552896);

  }

  createMarker(lng:any, lat:any){
    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);


      marker.on('drag',()=>{
        console.log('drage',marker.getLngLat())
      })
    }

}

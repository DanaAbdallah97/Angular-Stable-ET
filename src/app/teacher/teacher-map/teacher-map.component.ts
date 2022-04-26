import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teacher-map',
  templateUrl: './teacher-map.component.html',
  styleUrls: ['./teacher-map.component.css']
})
export class TeacherMapComponent implements OnInit {


  mapa: any;
  locationTeacher: any;
  objTeacher: any;
  id: any = localStorage.getItem('IdAccount');
  teacherid = parseInt(this.id);


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [35.8389018, 32.5552896], // lan , lat 
      zoom: 9 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.createMarker(35.8389018, 32.5552896);

  }


  Addlocation() {
    console.log('Teacher Location', this.locationTeacher);

    this.objTeacher = {
      "acoountid": this.teacherid,
      "wline": this.locationTeacher.lat,
      "hline": this.locationTeacher.lng
    }
    console.log('this.objTeacher',this.objTeacher)
    this.http.put('https://localhost:44363/api/Account/AddLocation/', this.objTeacher).subscribe((result) => {

      console.log(result);

    });

  }

  createMarker(lng: any, lat: any) {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);


    marker.on('drag', () => {
      // console.log('drage',marker.getLngLat())
      this.locationTeacher = marker.getLngLat();
    })
  }

}


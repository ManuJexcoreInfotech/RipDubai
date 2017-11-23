import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var google: any;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

	@ViewChild('map') mapRef: ElementRef;
	// map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LocationPage');
    // console.log(this.mapRef);
    this.showMap();
  }

  showMap() {
  	// Location Lat- Log
  	const location = new  google.maps.LatLng(25.185019,55.276746);
  	// map Option
  	const options = {
  		center: location,
  		zoom:16
  	}
  	const map =new google.maps.Map(this.mapRef.nativeElement,options);

  	this.addMarker(location, map);
  }
  addMarker(position, map) {
  	return new google.maps.Marker({
  		position,
  		map,
  		icon:'https://www.silverwingtechnologies.com/clients/img/marker.png'
  	});
  }

}

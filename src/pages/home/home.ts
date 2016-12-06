import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Facebook} from "ionic-native";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    accessToken: string;
    photo: string;

    constructor(public navCtrl: NavController, public http: Http) {

    }



    logInWithFacebook(){

        Facebook.login(['public_profile, email']).then(
            data => {

                this.accessToken = data.authResponse.accessToken;
                console.log(data);


            },
            err => {
                console.log(err);
            }
        );

    }

    clearFacebookSessionData(){

        Facebook.logout().then(
            data => {

                console.log(data);


            },
            err => {
                console.log(err);
            }
        );

    }

    retrieveProfileData(){

        this.http.get("https://graph.facebook.com/v2.8/me?access_token=" + this.accessToken + "&fields=id,name,email,gender")
            .map(res => res.json()).subscribe(data => {
                console.log(data);

                this.photo = 'http://graph.facebook.com/' + data.id + '/picture?type=large';

        });

    }

}

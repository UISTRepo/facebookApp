import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Teams} from "../../providers/teams";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    user: any = {};

    teams: any = [];

    group: string;
    errorMsg: string;

    constructor(public navCtrl: NavController, public teamsProvider: Teams) {

        this.user = {
            id: 2,
            name: 'User 2',
            email: '999@999.com',
            photo: 'assets/img/smurf.jpg',
            gender: 'Female'
        };



    }

    getTeams(){
        this.teamsProvider.getTeams().subscribe(data => {
            this.teams = data;
        });
    }

    getGroupTeams(){

        if(!this.group){
            this.errorMsg = 'Select Group';
            return;
        }

        this.errorMsg = null;

        this.teamsProvider.getGroupTeams(this.group).subscribe(data => {
            this.teams = data;
        });

    }

}

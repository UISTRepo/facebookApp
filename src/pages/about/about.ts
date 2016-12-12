import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    user: any = {};

    constructor(public navCtrl: NavController) {

        this.user = {
            id: 2,
            name: 'User 2',
            email: '999@999.com',
            photo: 'assets/img/smurf.jpg',
            gender: 'Female'
        }

    }

}

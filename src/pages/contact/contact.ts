import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    users: any = [];

    constructor(public navCtrl: NavController) {

        this.users = [
            {
                id: 1,
                name: 'User 1',
                email: '123@123.com',
                photo: 'assets/img/construction.jpg',
                gender: 'Male'
            },
            {
                id: 2,
                name: 'User 2',
                email: '123@123.com',
                photo: 'assets/img/smurf.jpg',
                gender: 'Male'
            },
            {
                id: 3,
                name: 'User 3',
                email: '123@123.com',
                photo: 'assets/img/construction.jpg',
                gender: 'Male'
            }
        ];

    }

}

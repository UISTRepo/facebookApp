import {Component, Input} from '@angular/core';

/*
 Generated class for the Profile component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
    selector: 'profile',
    templateUrl: 'profile.html'
})
export class ProfileComponent {

    @Input()
    user: any = {};

    constructor() {
        console.log('Hello Profile Component');

    }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Teams provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Teams {

    constructor(public http: Http) {
        console.log('Hello Teams Provider');
    }

    getTeams(){

        return this.http.get('http://52.29.104.85:3000/api/teams').map(res => res.json());

    }

    getGroupTeams(group){

        return this.http.get('http://52.29.104.85:3000/api/teams/' + group).map(res => res.json());

    }

}

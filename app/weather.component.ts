import {Component, OnInit, Input} from 'angular2/core';
import 'rxjs/Rx';

@Component({
    selector: 'weather',
    template: `<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>               
            </button>
            <a class="navbar-brand" href="#">Angular Weather</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input id="city" type="text" class="form-control" placeholder="Enter City" [(ngModel)]="result">
                </div>
                <button type="button" class="btn btn-default" (click)="onClick(result)">Get Forecast</button>
            </form>
        </div>
    </div>
</nav>`
})
export class WeatherComponent implements OnInit {
    @Input() result;

    onClick(value) {
        console.log(value);

    }

    constructor() {
    }

    ngOnInit() {

    }

}
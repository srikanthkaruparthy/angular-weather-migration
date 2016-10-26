import {Component, OnInit, Input} from 'angular2/core';
import {Http} from 'angular2/http';
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
</nav> 
    <div class="container">
    <div class="jumbotron" >
        <template [ngIf]="error">    
        </template>
        <template [ngIf]="!name">        
        </template>
        <template [ngIf]="name">
            <template [ngIf]="name.query.results !== null">
                <h2 [innerHtml]="name.query.results.channel.item.title"> </h2>
                <p [innerHtml]="name.query.results.channel.item.description"></p>
            </template>  
             <template [ngIf]="name.query.results === null">
                <h2>Location Unavailable</h2>
            </template>
        </template>
    </div>  
</div>`

})
export class WeatherComponent implements OnInit {
    name: Object;
    error: Object;
    @Input() result;

    constructor(private http: Http) {
    }


    onClick(value) {
        return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + value + '")&format=json')
            .map(res => res.json())
            .subscribe(
                (data) => {
                    this.name = data;
                },
                (err) => {
                    this.error = err;
                },
                () => {
                    console.log("Success")
                }
            );
    }


    ngOnInit() {

    }

}
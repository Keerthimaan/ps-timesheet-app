import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
	import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})

export class MainComponent {
 today;
 constructor(){
    this.today =new Date();
 console.log(this.today);
    
 }
}

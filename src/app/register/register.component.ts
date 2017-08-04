import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { Register } from "./register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit{
 
status:boolean = false ;
    public http: Http ;
    posts_Url: string = 'http://127.0.0.1:3000/register';
        uname : string ;
	      pwd : string ;
  submitPost(){
        if(  this.uname != undefined  && this.pwd != undefined)
        {
            alert("product added - ["+this.uname+","+this.pwd+"]");
            var body = this.uname+"|"+this.pwd  ;  
            console.log(body);
          this.http.post(this.posts_Url,body).subscribe(
           data => console.log(data),
           err => console.log(err),
           () => console.log('Request Completed')
         );
        } else {
          this.status = true ;
        }
    } 
    ngOnInit() {     
    } 
    constructor(private router: Router) { }
    btnClick= function () {
        this.router.navigateByUrl('/main');
};
}
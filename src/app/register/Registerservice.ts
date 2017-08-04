import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import { Register } from './register' ;
@Injectable()
export class RegisterService {
    http: Http;
    returnCommentStatus:Object = [];
    posts_Url: string = 'https://127.0.0.1:3000/addregister';
    constructor(public _http: Http) {
       this.http = _http;
    }
    postProduct(register:Register) {
      
    
       return this.http.post(this.posts_Url, register, { 
        })
       .map(res =>  res.json());     	    
    }
 }
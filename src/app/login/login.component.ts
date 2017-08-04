import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent {
  constructor(private router: Router) { }
    uname : string='';
    psw : string='';
    btnClick= function () {
        this.router.navigateByUrl('/register');
};
      btnClic= function () {
        this.router.navigateByUrl('/main');
};
      
}

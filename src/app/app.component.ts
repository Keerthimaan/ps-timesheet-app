import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <nav>
      <a routerLink="/login" routerLinkActive="active"><input class="button" type="submit" value="SIGN IN"></a>
      <a routerLink="/register" routerLinkActive="active"><input class="button" type="submit" value="SIGN UP"></a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
  
}

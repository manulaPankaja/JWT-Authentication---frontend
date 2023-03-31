import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean = false;
  constructor(
    private Auth:AuthService
  ){}

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}


// This is an Angular component that provides a navigation bar to an Angular application. The component has a loggedIn property that is a boolean and is used to determine whether the user is logged in or not.

// The constructor method injects an instance of AuthService into the component.

// The ngOnInit method subscribes to the authStatus observable of the AuthService to receive updates when the user logs in or logs out. When the authStatus observable emits a new value, the loggedIn property is updated accordingly.

// In the template file associated with this component (navbar.component.html), the value of the loggedIn property can be used to conditionally display certain elements in the navigation bar based on whether the user is logged in or not. For example, if loggedIn is true, a "Logout" button could be displayed in the navigation bar, and if loggedIn is false, a "Login" button could be displayed instead.
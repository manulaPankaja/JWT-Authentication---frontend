import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}

// import statements: This file imports Injectable from @angular/core, BehaviorSubject from rxjs, and a TokenService that appears to be custom-made for this app.
// @Injectable({ providedIn: 'root' }): This is a decorator that marks the class as an injectable service and specifies that it should be provided in the root injector.
// private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn()): This line declares a private variable loggedIn that is a BehaviorSubject<boolean>. The initial value of this variable is set to the result of this.Token.loggedIn().
// authStatus = this.loggedIn.asObservable(): This line creates a public property authStatus that is an observable of the loggedIn variable.
// changeAuthStatus(value: boolean): This method takes a boolean value and calls the next() method on the loggedIn BehaviorSubject, updating its value to the given boolean value.
// constructor(private Token: TokenService): This is the constructor of the service, which takes an instance of TokenService as a dependency and assigns it to a private variable Token.

// The AuthService is responsible for managing the authentication state of the app. The loggedIn BehaviorSubject tracks whether the user is currently logged in or not, and the changeAuthStatus() method updates this value when the user logs in or out. The authStatus observable can be subscribed to by other components to get updates on the authentication status. The TokenService dependency likely provides methods for managing authentication tokens.
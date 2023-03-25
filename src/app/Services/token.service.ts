//ng g s Services/Token

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss ={
    login:'http://127.0.0.1:8000/api/login',
    signup:'http://127.0.0.1:8000/api/signup',
  }

  constructor() { }

  handle(token: any){
    this.set(token);
    console.log(this.isValid());
  };

  set(token: any){
    localStorage.setItem('token', token);
  } //This method sets the provided token in local storage.

  get(){
    return localStorage.getItem('token');
  } //This method retrieves the token from local storage.

//getItem() is a method that is called on the localStorage object. The localStorage object is a global object in web browsers that allows you to store key/value pairs in the browser's storage, which can be useful for storing user preferences, user authentication tokens, and other data that needs to persist between page loads.

// The getItem() method is used to retrieve the value associated with a given key from the localStorage. In this case, the key is 'token', so localStorage.getItem('token') will return the value associated with the 'token' key, which is presumably an authentication token for the current user.

// The get() method in the TokenService class is simply a wrapper around localStorage.getItem('token'), which allows other parts of the Angular application to easily retrieve the authentication token stored in the browser's local storage.

  remove(){
    return localStorage.removeItem('token');
  } //This method removes the token from local storage.

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  } //This method checks whether the stored token is valid by decoding the token payload and checking if the issuer is one of the values in the iss object.

  payload(token: any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  } //This method decodes the token payload and returns the payload object.

  decode(payload: any){
    return JSON.parse(atob(payload));
  } //This method decodes a base64-encoded string and returns the decoded object.

  loggedIn(){
    return this.isValid();
  } //This method returns whether the stored token is valid by calling the isValid() method.
}

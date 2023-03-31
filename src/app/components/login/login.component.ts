//import { HttpClient } from '@angular/common/http'; 
// This line of code is written in TypeScript and it imports the HttpClient module from the @angular/common/http package.

// HttpClient is a built-in Angular module that allows you to make HTTP requests to a server to fetch data, post data, update data, and delete data. It is an improved version of the deprecated Http module, and it offers better features like support for request and response interception, typed response bodies, and more.

// By importing HttpClient in your Angular project, you can create an instance of the HttpClient class and use its methods to perform HTTP operations in your application.


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service'; //Using the JarviewService insted of the HttpClient
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form ={
    email:null,
    password:null
  };

  //public error = null;

  //constructor(private http:HttpClient){
  //This is a constructor function in TypeScript that takes a parameter http of type HttpClient. The private keyword before http is an access modifier that makes the http parameter a private property of the class.

  // This constructor is likely part of an Angular service or component class. By injecting the HttpClient in the constructor, you can use it within the class to make HTTP requests to a server. Angular's dependency injection system will create an instance of the HttpClient class and pass it to the constructor when the service or component is created.
    
  // Here's an example of how you could use the http property in this class to make an HTTP GET request to a server:

  // this.http.get('/api/data').subscribe(data => {
  //   console.log(data);
  // });

  // In this example, the get method of the HttpClient class is used to fetch data from a server endpoint located at /api/data. The subscribe method is used to handle the response and log the returned data to the console.

  
//}

  constructor(
    private Jarwis:JarwisService,
    private Token:TokenService,
    private router: Router,
    private Auth: AuthService //The AuthService is likely a service or class that provides authentication functionality, such as handling user login, registration, and session management. By declaring the Auth variable as a type of AuthService, you can ensure that only instances of the AuthService class can be assigned to it. This helps to prevent errors and improve type safety in your code.
    ){}

  onSubmit(){
    this.Jarwis.login(this.form).subscribe( // Use the Jarvise service to subscribe
      data => this.handleResponse(data),
      error => console.log(error),//this.handleError(error)
      );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true); 
    this.router.navigateByUrl('/profile');
  }
// The handleResponse() function is a method of the LoginComponent class in an Angular application. It is called when the login API call returns a successful response. The function takes a parameter data which represents the response object returned by the server.

// Inside the function, it calls the handle() method of the TokenService instance with the access_token property of the data object as an argument. The TokenService is responsible for handling the authentication token that is returned from the server after a successful login.

// The handle() method of the TokenService saves the token in the browser's local storage, and it also checks if the token is valid or not using the isValid() method of the same service.

// Overall, the handleResponse() function is an important part of the login process as it handles the authentication token returned from the server and saves it in the browser's local storage for future use.

  // handleError(error: null){
  //   this.error = error;
  // }

}

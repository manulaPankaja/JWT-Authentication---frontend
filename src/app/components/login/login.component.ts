//import { HttpClient } from '@angular/common/http'; 
// This line of code is written in TypeScript and it imports the HttpClient module from the @angular/common/http package.

// HttpClient is a built-in Angular module that allows you to make HTTP requests to a server to fetch data, post data, update data, and delete data. It is an improved version of the deprecated Http module, and it offers better features like support for request and response interception, typed response bodies, and more.

// By importing HttpClient in your Angular project, you can create an instance of the HttpClient class and use its methods to perform HTTP operations in your application.


import { Component } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service'; //Using the JarviewService insted of the HttpClient

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

  constructor(private Jarwis:JarwisService){

  }

  onSubmit(){
    this.Jarwis.login(this.form).subscribe( // Use the Jarvise service to subscribe
      data => console.log(data),
      error => console.log(error),//this.handleError(error)
      );
  }

  // handleError(error: null){
  //   this.error = error;
  // }

}

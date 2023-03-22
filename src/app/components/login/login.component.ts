import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
  constructor(private http:HttpClient){

  }

  onSubmit(){
    return this.http.post('http://127.0.0.1:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error),//this.handleError(error)
      );
  }

  // handleError(error: null){
  //   this.error = error;
  // }

}

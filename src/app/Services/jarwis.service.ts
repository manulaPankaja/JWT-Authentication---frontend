// Created a servise for care about the HTTP requests. Created using the command: ng g s Services/Jarwis
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }

  signup(data: { name: null; email: null; password: null; password_confirmation: null; }){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data: { email: null; password: null; }){
    return this.http.post(`${this.baseUrl}/login`, data)
  }
}

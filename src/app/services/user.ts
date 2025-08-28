import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  id: number;
  dni: string;
  horaslaboradas: number;
  diaslaborados: number;
  faltas: number;
  tipolrabajador: string | number;
  calcular?: number;
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/employees';
  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
}
